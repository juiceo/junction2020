from flask_sqlalchemy import SQLAlchemy
from init import db
from flask_serialize import FlaskSerializeMixin

class Transaction(db.Model, FlaskSerializeMixin):
    __tablename__ = "transactions"
    id = db.Column(db.Integer(), primary_key=True)
    category = db.Column(db.Text())
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
