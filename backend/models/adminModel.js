import pool from '../config/db.js'

// Hosts
export const getAllHosts = async () => {
    const result = await pool.query('SELECT id, name, email, role FROM hosts ORDER BY id ASC')
    return result.rows
}

export const getHostById = async (id) => {
    const result = await pool.query('SELECT id, name, email, role FROM hosts WHERE id = $1', [id])
    return result.rows[0]
}

// Vans
export const getAllVans = async () => {
    const result = await pool.query('SELECT * FROM vans ORDER BY id ASC')
    return result.rows
}

export const getVanById = async (id) => {
    const result = await pool.query('SELECT * FROM vans WHERE id = $1', [id])
    return result.rows[0]
}

export const createVan = async ({ name, price, description, imageurl, type }) => {
    const result = await pool.query(`
    INSERT INTO vans (name, price, description, imageurl, type)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [name, price, description, imageurl, type])
    return result.rows[0]
}

export const updateVan = async (id, updates) => {
    const fields = Object.keys(updates)
    const values = Object.values(updates)

    if (!fields.length) return null

    const setClause = fields.map((field, i) => `${field} = $${i + 1}`).join(', ')
    const result = await pool.query(
        `UPDATE vans SET ${setClause} WHERE id = $${fields.length + 1} RETURNING *`,
        [...values, id]
    )

    return result.rows[0]
}

export const deleteVan = async (id) => {
    const result = await pool.query('DELETE FROM vans WHERE id = $1 RETURNING *', [id])
    return result.rows[0]
}