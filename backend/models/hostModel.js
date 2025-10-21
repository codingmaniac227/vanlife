import pool from '../config/db.js'

export const getAllHosts = async () => {
    const result = await pool.query("SELECT id, name, email FROM hosts ORDER BY id ASC")
    return result.rows
}

export const getHostById = async (hostId) => {
    const result = await pool.query(
        "SELECT id, name, email, role FROM hosts WHERE id = $1",
        [hostId]
    )
    return result.rows[0]
}

export const createHost = async ({ name, email, passwordHash }) => {
    const result = await pool.query(
        `INSERT INTO hosts (name, email, passwordHash) 
         VALUES ($1, $2, $3)
         RETURNING id, name, email, role`,
        [name, email, passwordHash]
    )
    return result.rows[0]
}