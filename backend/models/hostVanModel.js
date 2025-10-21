import pool from '../config/db.js'

export const getAllHostVans = async (hostId) => {
    const result = await pool.query(`
    SELECT v.*
    FROM vans v
    JOIN host_vans hv ON v.id = hv.van_id
    WHERE hv.host_id = $1
    `, [hostId])
    return result.rows
}

export const getHostVan = async (hostId, vanId) => {
    const result = await pool.query(`
        SELECT v.*
        FROM vans v
                 JOIN host_vans hv ON v.id = hv.van_id
        WHERE hv.host_id = $1 AND v.id = $2
    `, [hostId, vanId])
    return result.rows[0] // single van
}

export const addHostVan = async (hostId, vanId) => {
    const result = await pool.query(`
        INSERT INTO host_vans (host_id, van_id)
        VALUES ($1, $2)
        ON CONFLICT (host_id, van_id) DO NOTHING
        RETURNING *
    `, [hostId, vanId])
    return result.rows[0]
}

export const deleteHostVan = async (hostId, vanId) => {
    const result = await pool.query(`
    DELETE FROM host_vans WHERE host_id = $1 AND van_id = $2 RETURNING *`,
    [hostId, vanId]
    )
    return result.rows[0]
}