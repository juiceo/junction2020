import flask
from flask import Flask, g
from model import Transaction
from init import app, db


@app.route('/')
def index():
    transactions = Transaction.query.order_by(Transaction.tstamp.desc()).limit(25).all()
    return flask.json.jsonify([t.serialize for t in transactions])



