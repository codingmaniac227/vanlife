import express from 'express'
import {
    getVans,
    getVan,
} from "../controllers/vanController.js";

const router = express.Router()

/** Public Routes **/
// GET -> ALL HOST VANS
router.get('/vans', getVans)
// GET -> ONE HOST VAN
router.get('/vans/:id', getVan)

export default router