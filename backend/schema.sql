DROP TABLE IF EXISTS transactions;

CREATE TABLE transactions(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT,
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

