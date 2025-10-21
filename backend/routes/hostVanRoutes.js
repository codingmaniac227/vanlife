import express from 'express'
import {
    addHostVan,
    getHostVans,
    getHostVan,
    deleteHostVan
} from '../controllers/hostVanController.js'

const router = express.Router()

// GET -> all vans saved by specific host
router.get('/:hostId', getHostVans)

// GET -> a single saved van
router.get('/:hostId/:vanId', getHostVan)

// POST -> save a van to the host's profile
router.post('/', addHostVan)

// DELETE -> remove a van from the host's profile
router.delete('/', deleteHostVan)

export default router