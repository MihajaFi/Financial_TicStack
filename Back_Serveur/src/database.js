import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "finance",
    password: "rck12072003" ,//Your password postgresql
    port: 5432 // default port on postgresql
});