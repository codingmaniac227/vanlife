import * as HostVan from '../models/hostVanModel.js'


export const getHostVans = async (req, res, next) => {
    try {
        const { hostId } = req.params
        const vans = await HostVan.getAllHostVans(hostId)
        res.status(200).json({ vans })
    } catch (error) {
        next(error)
    }
}

export const getHostVan = async (req, res, next) => {
    try {
        const { hostId, vanId } = req.params
        const van = await HostVan.getHostVan(hostId, vanId)

        if (!van) return res.status(404).json({ message: 'Van not found for this user '})

        res.status(200).json({ van })
    } catch (error) {
        next(error)
    }
}

export const addHostVan = async (req, res, next) => {
    try {
        const { hostId, vanId } = req.body

        if (!hostId || !vanId) {
            return res.status(404).json({ message: 'Host ID and Van ID required'})
        }

        const added = await HostVan.addHostVan(hostId, vanId)

        if (!added) {
            return res.status(404).json({ message: 'Van already saved to dashboard' })
        }

        res.status(201).json({ message: "Van added successfully", added })
    } catch (error) {
        next(error)
    }
}


export const deleteHostVan = async (req, res, next) => {
    try {
        const { hostId, vanId } = req.params
        const deleted = await HostVan.deleteHostVan(hostId, vanId)
        if (!deleted) {
            return res.status(404).json({ message: "Van not found in your saved list." })
        }
        res.status(200).json({ message: "Van successfully removed from your saved list." })
    } catch (error) {
        next(error)
    }
}