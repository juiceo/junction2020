# Setting up backend

Install python dependencies through `pip install -r requirements.txt`.

Download csv data file `synt_transactions_10M.csv`. Set up the database by running `python create_db.py --create --csv <path-to-csv> --bets <path-to-bets-file>`. This will read the csv file and load it into an sqlite database file `./op.db`.

The `--csv` parameter in the command above is optional. You can just leave it out and an empty database will be created.

The `--bets` parameter points to a json file containing a list of yolo bets to load into the database.

Run the flask server using `flask run`.

