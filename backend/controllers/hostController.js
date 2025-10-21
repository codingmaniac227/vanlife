import * as Host from '../models/hostModel.js'


export const getHosts = async (req, res, next) => {
    try {
        const hosts = await Host.getAllHosts()
        res.status(200).json({ hosts })
    } catch (error) {
        next(error)
    }
}

export const getHost = async (req, res, next) => {
    try {
        const { id } = req.params
        const host = await Host.getHostById(id)

        if (!host) {
            return res.status(404).json({ error: "Host not found" })
        }
        res.status(200).json({ host })
    } catch (error) {
        next(error)
    }
}

export const createHost = async (req, res, next) => {
    try {
        const { name, email, passwordHash } = req.body

        if (!name || !email || !passwordHash) {
            return res.status(400).json({ error: "All fields required" })
        }

        const newHost = await Host.createHost({ name, email, passwordHash })

        res.status(200).json({message: 'Host created successfully.', host: newHost})
    } catch (error) {
        next(error)
    }
}