
export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "finance",
    password: "12345678" ,//Your password postgresql
    port: 5432 // default port on postgresql
});