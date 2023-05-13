\c postgres;
DROP DATABASE IF EXISTS finance;
CREATE DATABASE finance;
\c finance;
-- "user"
DROP TABLE IF EXISTS "user";
CREATE TABLE "user"(
  id_user SERIAL PRIMARY KEY,
  user_name Varchar(250) NOT NULL,
  user_first_name Varchar(250) NOT NULL,
  gender CHAR(1) NOT NULL,
  birth_date Date,
  create_date Date NOT NULL DEFAULT CURRENT_DATE,
  occupation Varchar(250) NOT NULL,
  "address" VARCHAR(300),
  contact VARCHAR(50)
);

-- group_account
DROP TABLE IF EXISTS group_account;
CREATE TABLE group_account(
  id_account SERIAL PRIMARY KEY,
  "money" FLOAT NOT NULL
);
-- pay 
DROP TABLE IF EXISTS pay;
CREATE TABLE pay(
  id SERIAL PRIMARY KEY,
  "value" FLOAT NOT NULL,
  payement_date TimeStamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  reason Varchar(250) NOT NULL DEFAULT 'participation',
  week Date,
  id_user SERIAL REFERENCES "user"(id_user)
);
-- withdrawal
DROP TABLE IF EXISTS withdrawal;
CREATE TABLE withdrawal(
  id SERIAL PRIMARY KEY,
  "value" FLOAT NOT NULL,
  withdrawal_date TimeStamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  reason Varchar(250),
  id_user SERIAL REFERENCES "user"(id_user)
);