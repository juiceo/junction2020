# Setting up backend

Install python dependencies through `pip install -r requirements.txt`.

Download csv data file `synt_transactions_10M.csv`. Set up the database by running `python create_db.py --csv <path-to-csv>`. This will read the csv file and load it into an sqlite database file `./op.db`.

The `--csv` parameter in the command above is optional. You can just leave it out and an empty database will be created. Be warned, every time you run the command, all data in the database is destroyed and reset.

Run the flask server using `flask run`.

