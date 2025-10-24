import * as Van from "../models/vanModel.js"

export const getVans = async (req, res, next) => {
    try {
        console.log('Incoming filters:', req.query);

        const type = req.query.type
        const vans = await Van.getAllVans({ type })
        res.status(200).json({ vans })
    } catch (error) {
        console.error('Error in getAllVans', error)
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



