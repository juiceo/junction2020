DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS yolo_bets;

CREATE TABLE transactions(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT,
  label TEXT,
  tstamp DATE,
  arvo_pvm DATE,
  kirjaus_pvm DATE,
  maksu_pvm DATE,
  tilinro INT,
  rahamaara INT,
  saldo INT,
  vientiselitekd INT,
  taplajikd INT,
  bic_saaja TEXT,
  viite INT,
  iban_saaja INT,
  counterparty_account_id INT
);

CREATE TABLE yolo_bets(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  body TEXT,
  amount INT,
  expected_irr FLOAT,
  image_url TEXT
);

CREATE INDEX transaction_start_end ON transactions(tstamp);
CREATE INDEX transaction_category ON transactions(category);
CREATE INDEX transaction_account ON transactions(tilinro);

