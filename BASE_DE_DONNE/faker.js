import faker from 'faker';

//For users:
const minDate = new Date('2023-01-01');
const maxDate = new Date('2027-12-31');
 

for (let i = 0; i < 1000; i++) {
    const user_name = faker.name.findName().slice(0, 100);
    const user_first_name = faker.name.findName().slice(0, 100);
    const gender = faker.random.arrayElement(['M', 'F']);
    const birth_date = faker.date.between(minDate, maxDate).toString().slice(0, 15);
    const  create_date = faker.date.between(minDate, maxDate).toString().slice(0, 15);
    const occupation =  "This is a test ";
    
    // Create the insert statement
    const insertStatement = `INSERT INTO "user" VALUES ('${user_name}', '${user_first_name}','${gender}','${birth_date}','${create_date }' ,'${occupation}';`;
    console.log("");
    console.log(insertStatement);
}


//For group_account:
for (let i = 0; i < 1000; i++){
    const money = faker.datatype.number();
    const insertStatement = `INSERT INTO group_account VALUES ('${money}${","+ i}';)`;
    console.log("");
    console.log(insertStatement);

}

// For pay:
for (let i = 0; i < 100; i++) {
    const value = faker.datatype.number();
    const payement_date = `${faker.date.between(2021, 2023)} ;`
    const reason = "This is a test ";
    const id_user = i;
    const id_group_account = i;

    // Create the insert statement
    const insertStatement = `INSERT INTO "user" VALUES ('${value}${","+ i}'', '${payement_date}','${reason}','${id_user}','${id_group_account}';`;
    console.log("");
    console.log(insertStatement);

}

//For withdrawal:
for (let i = 0; i < 1000; i++) {
  const value = faker.datatype.number();
  const withdrawal_date  = `${faker.date.between(2021, 2023)}`;
  const reason = "This is e test ";
  const id_user = i;
  const id_group_account = i;
    // Create the insert statement
    const insertStatement = `INSERT INTO group VALUES ('${value}${","+ i}'', '${withdrawal_date}','${reason}','${id_user}','${id_group_account}');`;
    console.log("");
    console.log(insertStatement);
}