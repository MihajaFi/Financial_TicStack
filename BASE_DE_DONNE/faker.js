const faker = require('faker');

// for user  
for (let i = 0; i < 1; i++) {
    const userName = faker.internet.userName();
    const firstName = faker.name.firstName();
    const gender = faker.random.arrayElement(['M', 'F']);
    const birthDate = faker.date.past(40, '2003-01-01').toISOString().split('T')[0];
    const createDate = faker.date.between('2015-01-01', '2023-05-11').toISOString().split('T')[0];
    const occupation = faker.name.jobTitle();
  
    const insertStatement = `INSERT INTO "user" (user_name, user_first_name, gender, birth_date, create_date, occupation) VALUES ('${userName}', '${firstName}', '${gender}', '${birthDate}', '${createDate}', '${occupation}');`;
  
    console.log(insertStatement);
  }
  
  // for group 
for (let i = 0; i < 1; i++) {
    const money = faker.finance.amount();
  
    const insertStatement = `INSERT INTO group_account ("money") VALUES (${money});`;
  
    console.log(insertStatement);
  }
  
  // for  pay
for (let i = 0; i < 1; i++) {
    const value = faker.finance.amount();
    const paymentDate = faker.date.past().toISOString();
    const reason = faker.random.arrayElement(['participation', 'payment', 'donation']);
    const week = faker.date.past().toISOString().split('T')[0];
    const userId = faker.random.number({ min: 1, max: 10 });
    const groupAccountId = faker.random.number({ min: 1, max: 10 });
  
    const insertStatement = `INSERT INTO pay ("value", payement_date, reason, week, id_user, id_group_account) VALUES (${value}, '${paymentDate}', '${reason}', '${week}', ${userId}, ${groupAccountId});`;
  
    console.log(insertStatement);
  }
  
  // for withdrawal
for (let i = 0; i < 1; i++) {
    const value = faker.finance.amount();
    const withdrawalDate = faker.date.past().toISOString();
    const reason = faker.random.word();
    const userId = faker.random.number({ min: 1, max: 10 });
    const groupAccountId = faker.random.number({ min: 1, max: 10 });
  
    const insertStatement = `INSERT INTO withdrawal ("value", withdrawal_date, reason, id_user, id_group_account) VALUES (${value}, '${withdrawalDate}', '${reason}', ${userId}, ${groupAccountId});`;
  
    console.log(insertStatement);
  }
  
