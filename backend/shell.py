import ipdb
from flask import app
from model import Transaction
from init import app, db

ctx = app.test_request_context()
ctx.push()

ipdb.set_trace()

ctx.pop()


