import pool from '../config/db.js'

export const getAllVans = async ({ type }) => {

    if (
        !type ||
        (Array.isArray(type) && type.length === 0) ||
        (typeof type === 'string' && !type.trim())
    ) {
        const result = await pool.query('SELECT * FROM vans ORDER BY id ASC')
        return result.rows
    }

    const types = (Array.isArray(type) ? type : [type])
        .map(type => String(type).trim().toLowerCase())
        .filter(Boolean)

    if (types.length === 0) {
    const result = await pool.query(`SELECT * FROM vans WHERE LOWER(type) = $1 ORDER BY id ASC`,
        [types[0]]
    )
        return result.rows
    }

    const result = await pool.query(
        `SELECT * FROM vans WHERE(type) = ANY($1::text[]) ORDER BY id ASC`,
        [types]
    )
    return result.rows
}

export const getVanById = async (id) => {
    const result = await pool.query('SELECT * FROM vans WHERE id = $1', [id])
    return result.rows[0]
}
