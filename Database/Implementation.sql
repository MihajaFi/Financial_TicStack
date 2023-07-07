\c postgres;

DROP DATABASE IF EXISTS finance;

CREATE DATABASE finance;

\c finance;

-- "user"
DROP TABLE IF EXISTS "user";

CREATE TABLE "user"(
  id SERIAL PRIMARY KEY,
  profil VARCHAR(300),
  last_name VARCHAR(250) NOT NULL,
  first_name VARCHAR(250) NOT NULL,
  gender CHAR(1) NOT NULL,
  birth_date DATE,
  create_date DATE NOT NULL DEFAULT CURRENT_DATE,
  occupation VARCHAR(250) NOT NULL,
  "address" VARCHAR(300),
  contact VARCHAR(50),
  facebook TEXT,
  email TEXT
);

-- group_account
DROP TABLE IF EXISTS group_account;

CREATE TABLE group_account(
  id SERIAL PRIMARY KEY,
  total_money FLOAT NOT NULL
);

-- pay 
DROP TABLE IF EXISTS pay;

CREATE TABLE pay(
  id SERIAL PRIMARY KEY,
  "value" DOUBLE PRECISION NOT NULL,
  payement_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  reason VARCHAR(250) NOT NULL DEFAULT 'participation',
  week DATE,
  id_user SERIAL REFERENCES "user"(id)
);

-- withdrawal
DROP TABLE IF EXISTS withdrawal;

CREATE TABLE withdrawal(
  id SERIAL PRIMARY KEY,
  "value" DOUBLE PRECISION NOT NULL,
  withdrawal_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  reason VARCHAR(250),
  id_user SERIAL REFERENCES "user"(id)
);