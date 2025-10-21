import pool from '../config/db.js'

export const getAllVans = async () => {
    const result = await pool.query('SELECT * FROM vans ORDER BY id ASC')
    return result.rows
}

export const getVanById = async (id) => {
    const result = await pool.query('SELECT * FROM vans WHERE id = $1', [id])
    return result.rows[0]
}
