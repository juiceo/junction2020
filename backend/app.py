from datetime import datetime
import flask
from flask import Flask, g, request
from model import Transaction
from init import app, db

TIME_FORMAT = '%Y-%m-%d'



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


