import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "finance",
    password: "00000000" ,//Your password postgresql
    port: 5432 // default port on postgresql
});
