import express from 'express'
import {
    getAllVans,
    getVan,
    createVan,
    updateVan,
    deleteVan,
    getAllHosts,
    getHostById
} from '../controllers/adminController.js'
import { requireAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()

// Manage vans
router.get('/vans', requireAdmin, getAllVans)
router.get('/vans/:id', requireAdmin, getVan)
router.post('/vans/', requireAdmin, createVan)
router.put('/vans/:id', requireAdmin, updateVan)
router.delete('/vans/:id/edit', requireAdmin, deleteVan)

// Manage hosts
router.get('/hosts', requireAdmin, getAllHosts)
router.get('/hosts/:id', requireAdmin, getHostById)

export default router

