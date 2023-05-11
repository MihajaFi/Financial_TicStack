-- How much money is there?
SELECT SUM("money") as Our_sum FROM group_account;

-- Who are the users that have paid? -When and how much
SELECT "user".*, payement_date, "value" FROM "user"
INNER JOIN pay ON "user".id_user = "pay".id_user;

-- How much did they pay?
SELECT "value" FROM pay 
INNER JOIN "user" ON pay.id = "user".id_user
WHERE "user".user_name ='Malala' AND pay.week = '2023-01-15';

-- How much did the group spend?
SELECT "value" FROM withdrawal 
WHERE  date_part('year',withdrawal_date) > '2002' AND date_part('year',withdrawal_date) <= '2023';

-- Users who have not yet paid last week
SELECT "user".* FROM "user"
WHERE "user".id_user NOT IN(
    SELECT "user".id_user FROM "user"
    INNER JOIN pay ON pay.id = "user".id_user
    WHERE pay.week = '2020-01-12'
);

-- What kind of user is this?
SELECT occupation FROM "user" WHERE user_name ILIKE '%fifa%';

-- How much did the group earn in a month
SELECT SUM("value")
FROM pay 
WHERE  date_part('year',payement_date) > '2000' AND date_part('year',payement_date) < '2023';

-- How to see all activity that we are spending our money
SELECT reason FROM withdrawal UNIQUE;