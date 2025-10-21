import * as Van from "../models/vanModel.js"

export const getVans = async (req, res, next) => {
    try {
        const vans = await Van.getAllVans()
        res.status(200).json({ vans })
    } catch (error) {
        next(error)
    }
}

export const getVan = async (req, res, next) => {
    try {
        const { id } = req.params
        const van = await Van.getVanById(id)

        if (!van) {
            res.status(404).json({ message: 'Van not found' })
        }

        res.status(200).json({ van })
    } catch (error) {
        next(error)
    }
}



