import * as Admin from '../models/adminModel.js'

export const getAllHosts = async (req, res, next) => {
    try {
        const hosts = await Admin.getAllHosts()
        res.status(200).json({ hosts })
    } catch (error) {
        next(error)
    }
}

export const getHostById = async (req, res, next) => {
    try {
        const { hostId } = req.params
        const host = await Admin.getHostById(hostId)
        if (!host) return res.status(404).json({ message: 'Host not found' })
        res.status(200).json({ host })
    } catch (error) {
        next(error)
    }
}


export const getAllVans = async (req, res, next) => {
    try {
        const vans = await Admin.getAllVans()
        res.status(200).json({ vans })
    } catch (error) {
        next(error)
    }
}

export const getVan = async (req, res, next) => {
    try {
        const { id } = req.params
        const van = await Admin.getVanById(id)
        if (!van) return res.status(404).json({ message: 'Van not found' })
        res.status(200).json({ van })
    } catch (error) {
        next(error)
    }
}

export const createVan = async (req, res, next) => {
    try {
        const { name, price, description, imageurl, type } = req.body
        const van = await Admin.createVan({ name, price, description, imageurl, type })
        res.status(201).json({ message: 'Van created', van })
    } catch (error) {
        next(error)
    }
}

export const updateVan = async (req, res, next) => {
    try {
        const { id } = req.params
        const updates = req.body
        const van = await Admin.updateVan(id, updates)
        res.status(200).json({ message: 'Van updated', van })
    } catch (error) {
        next(error)
    }
}

export const deleteVan = async (req, res, next) => {
    try {
        const { id } = req.params
        const deleted = await Admin.deleteVan(id)
        if (!deleted) return res.status(404).json({ message: 'Van not found' })
        res.status(200).json({ message: 'Van deleted' })
    } catch (error) {
        next(error)
    }
}
