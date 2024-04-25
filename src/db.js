import pg from 'pg'

export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "mysecretpassword",
    database: "nodepg",
    port: "5432"
})