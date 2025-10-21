import pool from "../config/db.js";

async function test() {
    try {
        const res = await pool.query("SELECT NOW()");
        console.log("Connected to Postgres ✅:", res.rows[0]);
    } catch (err) {
        console.error("Connection failed ❌", err);
    } finally {
        pool.end();
    }
}

test();
