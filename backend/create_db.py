import sqlite3
import datetime

db = sqlite3.connect('./op.db')

cursor = db.cursor()

with open('./schema.sql', 'rt') as f:
    cursor.executescript(f.read())

db.commit()
def date(string):
    return datetime.datetime.strptime(string, '%Y-%m-%d')

def parse_line(csv_line):
    category = csv_line[0]
    tstamp = datetime.datetime.strptime(csv_line[1].split('.')[0], '%Y-%m-%d %H:%M:%S')
    arvo_pvm = date(csv_line[2])
    kirjaus_pvm = date(csv_line[3])
    maksu_pvm = date(csv_line[4])
    tilinro = int(csv_line[5])
    rahamaara = int(float(csv_line[6]) * 100)
    saldo = int(float(csv_line[7]) * 100)
    vientiselitkd = int(csv_line[8])
    taplajikd = int(csv_line[9])
    bic_saaja = csv_line[10]
    viite = int(csv_line[11])
    iban_saaja = int(csv_line[12])
    counterparty_account_id = int(csv_line[13])
    return (category,
        tstamp,
        arvo_pvm,
        kirjaus_pvm,
        maksu_pvm,
        tilinro,
        rahamaara,
        saldo,
        vientiselitkd,
        taplajikd,
        bic_saaja,
        viite,
        iban_saaja,
        counterparty_account_id)

with open('./synt_transactions_10M.csv', 'rt') as f:
    f.readline()
    while True:
        try:
            line = f.readline().strip()
        except:
            break
        values = line.split(';')
        cursor.execute("""INSERT INTO transactions(category, tstamp, arvo_pvm, kirjaus_pvm, maksu_pvm, tilinro, rahamaara, saldo, vientiselitekd, taplajikd, bic_saaja, viite, iban_saaja, counterparty_account_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? ,?, ?)""", parse_line(values))
        db.commit()
        print(values, end='\r')

