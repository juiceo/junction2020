from datetime import datetime
import flask
from flask import Flask, g, request
from model import Transaction, YOLOBets
from init import app, db
import random

TIME_FORMAT = '%Y-%m-%d'

def to_date(datestring):
    return datetime.strptime(datestring, TIME_FORMAT)

@app.after_request
def after(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response

@app.route('/')
def index():
    """
    Can be queried with ?start=<start-date>&end=<end-date>
    start and end dates are to be given in the format YYYY-MM-DD e.g. 2020-08-22.
    """
    start = request.args.get('start', '1900-01-01')
    end = request.args.get('end', '3000-01-01')
    account_number = request.args.get('account', None)
    try:
        start = datetime.strptime(start, TIME_FORMAT)
        end = datetime.strptime(end, TIME_FORMAT)
        query = (Transaction.query.filter(Transaction.tstamp > start)
                .filter(Transaction.tstamp < end))
        if account_number:
            query = query.filter(Transaction.tilinro == int(account_number))

        transactions = query.order_by(Transaction.tstamp.asc()).limit(1000)
    except ValueError:
        return "Malformed query string", 400
    return flask.json.jsonify([t.serialize for t in transactions])

@app.route('/account/<int:account>/category')
def aggregate(account):
    grouped = (db.session.query(Transaction.category, db.func.sum(Transaction.rahamaara).label('sum'))
            .filter(Transaction.tilinro == account).group_by(Transaction.category).all())
    return flask.json.jsonify(grouped)

@app.route('/account/<int:account>/transactions', methods=['POST'])
def add_transactions(account):
    if not request.is_json:
        return "Mimetype not json", 400
    transactions = request.json
    added = []
    for transaction in transactions:
        t = Transaction(category=transaction['category'],
            tstamp=to_date(transaction['tstamp']),
            label=transaction['label'],
            rahamaara=int(transaction['amount'] * 100),
            tilinro=transaction.get('account', account),
            counterparty_account_id=transaction.get('counterparty_account_id', random.randint(0, 100)),
            saldo=transaction.get('saldo', None))
        db.session.add(t)
        added.append(t)
    db.session.commit()
    for transaction in added:
        amount = (db.session.query(db.func.sum(Transaction.rahamaara).label('sum'))
                .filter(Transaction.tstamp < transaction.tstamp)
                .filter(Transaction.tilinro == transaction.tilinro)
                .first())[0]
        transaction.saldo = amount
        db.session.add(transaction)
        db.session.commit()
    return flask.json.jsonify([t.serialize for t in added])

@app.route('/yolobets', methods=['GET'])
def get_bets():
    bets = YOLOBets.query.all()
    return flask.json.jsonify([t.serialize for t in bets])

@app.route('/yolobets/<int:bet_id>', methods=['POST'])
def take_bet(bet_id):
    bet = YOLOBets.query.filter(YOLOBets.id == bet_id).first()
    bet.taken = True
    db.session.add(bet)
    db.session.commit()
    return flask.json.jsonify(bet.serialize)


