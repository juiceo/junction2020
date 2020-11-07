import sqlite3
import datetime
import argparse
import json

parser = argparse.ArgumentParser()
parser.add_argument('-N', type=int)
parser.add_argument('--csv', type=str)
parser.add_argument('--create', action='store_true', help="Will drop tables, if they exists and create the database from scratch.")
parser.add_argument('--bets', type=str, help="Path to json file containing yolo bets to load into the database.")
flags = parser.parse_args()

def create_database():
    db = sqlite3.connect('./op.db', isolation_level='DEFERRED')

    cursor = db.cursor()

    with open('./schema.sql', 'rt') as f:
        cursor.executescript(f.read())

    db.commit()

    cursor.execute('''PRAGMA synchronous = EXTRA''')
    cursor.execute('''PRAGMA journal_mode = WAL''')
    return db

def date(string):
    return datetime.datetime.strptime(string, '%Y-%m-%d')

def parse_line(csv_line):
    tstamp = datetime.datetime.strptime(csv_line[1].split('.')[0], '%Y-%m-%d %H:%M:%S')
    csv_line[2] = date(csv_line[2])
    csv_line[3] = date(csv_line[3])
    csv_line[4] = date(csv_line[4])
    csv_line[5] = int(csv_line[5])
    csv_line[6] = int(float(csv_line[6]) * 100)
    csv_line[7] = int(float(csv_line[7]) * 100)
    csv_line[8] = int(csv_line[8])
    csv_line[9] = int(csv_line[9])
    csv_line[11] = int(csv_line[11])
    csv_line[12] = int(csv_line[12])
    csv_line[13] = int(csv_line[13])
    return csv_line

def add_transactions(db, filepath):
    cursor = db.cursor()
    with open(filepath, 'rt') as f:
        f.readline()
        i = 0
        while True:
            if flags.N is not None and flags.N <= i:
                break
            try:
                line = f.readline()
            except:
                break
            values = line.strip().split(';')
            try:
                line = parse_line(values)
            except Exception as e:
                continue
            cursor.executemany("""INSERT INTO transactions(category, tstamp, arvo_pvm, kirjaus_pvm, maksu_pvm, tilinro, rahamaara, saldo, vientiselitekd, taplajikd, bic_saaja, viite, iban_saaja, counterparty_account_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? ,?, ?)""", [line])
            if i % 1000 == 0:
                print(f"At record {i}", end='\r')
                db.commit()
            i += 1

    db.commit()

def load_bets(db, bet_file):
    with open(bet_file, 'rt') as f:
        bets = json.loads(f.read())

    cursor = db.cursor()
    for bet in bets:
        cursor.execute("""
        INSERT INTO yolo_bets(title, body, amount, expected_irr, image_url) VALUES (?, ?, ?, ?, ?);
        """, (bet['title'], bet['body'], bet['amount'], bet['expected_irr'], bet['image_url']))
    db.commit()

if __name__ == "__main__":
    if flags.create:
        db = create_database()
    else:
        db = sqlite3.connect('./op.db')
    if flags.csv is not None:
        add_transactions(db, flags.csv)
    if flags.bets is not None:
        load_bets(db, flags.bets)



