import sqlite3
import datetime

db = sqlite3.connect('./op.db', isolation_level='DEFERRED')

cursor = db.cursor()

with open('./schema.sql', 'rt') as f:
    cursor.executescript(f.read())

db.commit()

cursor.execute('''PRAGMA synchronous = EXTRA''')
cursor.execute('''PRAGMA journal_mode = WAL''')

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

with open('./synt_transactions_10M.csv', 'rt') as f:
    f.readline()
    i = 0
    while True:
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

