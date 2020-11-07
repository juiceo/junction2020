from flask_sqlalchemy import SQLAlchemy
from init import db

class Transaction(db.Model):
    __tablename__ = "transactions"
    id = db.Column(db.Integer(), primary_key=True)
    category = db.Column(db.Text())
    label = db.Column(db.Text())
    tstamp = db.Column(db.DateTime())
    arvo_pvm = db.Column(db.DateTime())
    kirjaus_pvm = db.Column(db.DateTime())
    maksu_pvm = db.Column(db.DateTime())
    tilinro = db.Column(db.Integer())
    rahamaara = db.Column(db.Integer())
    saldo = db.Column(db.Integer())
    vientiselitekd = db.Column(db.Integer())
    taplajikd = db.Column(db.Integer())
    bic_saaja = db.Column(db.Text())
    viite = db.Column(db.Integer())
    iban_saaja = db.Column(db.Integer())
    counterparty_account_id = db.Column(db.Integer())

    @property
    def serialize(self):
        return {'id': self.id,
                'tstamp': self.tstamp,
                'arvo_pvm': self.arvo_pvm,
                'kirjaus_pvm': self.kirjaus_pvm,
                'maksu_pvm': self.maksu_pvm,
                'tilinro': self.tilinro,
                'rahamaara': self.rahamaara,
                'saldo': self.saldo,
                'vientiselitekd': self.vientiselitekd,
                'taplajikd': self.taplajikd,
                'bic_saaja': self.bic_saaja,
                'viite': self.viite,
                'iban_saaja': self.iban_saaja,
                'counterparty_account_id': self.counterparty_account_id
                }

class YOLOBets(db.Model):
    __tablename__ = "yolo_bets"
    id = db.Column(db.Integer(), primary_key=True)
    title = db.Column(db.Text())
    body = db.Column(db.Text())
    amount = db.Column(db.Integer())
    expected_irr = db.Column(db.Float())
    image_url = db.Column(db.Text())
    taken = db.Column(db.Boolean(), default=False)

    @property
    def serialize(self):
        return {
                'id': self.id,
                'title': self.title,
                'body': self.body,
                'amount': self.amount,
                'expected_irr': self.expected_irr,
                'image_url': self.image_url,
                'taken': self.taken
                }

