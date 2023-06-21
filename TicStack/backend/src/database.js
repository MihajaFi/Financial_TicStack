import dotenv from "dotenv";
import pg from 'pg';
const { Pool } = pg;

dotenv.config();

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "finance",
    password: process.env.DB_PASSWORD ,//Your password postgresql
    port: process.env.DB_PORT // default port on postgresql
});