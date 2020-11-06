# Setting up backend

Install python dependencies through `pip install -r requirements.txt`.

Download csv data file `synt_transactions_10M.csv`. Set up the database by running `python create_db.py`. This will read the csv file and load it into an sqlite database file `./op.db`.

Run the flask server using `flask run`.

