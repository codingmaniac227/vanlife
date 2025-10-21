import express from 'express'
import {
    getHost,
    getHosts,
    createHost
} from "../controllers/hostController.js";

const router = express.Router();


// GET -> ONE HOST FROM ID
router.get('/host/:hostId', getHost)

// GET -> ALL HOSTS
router.get('/host/members', getHosts)

// POST -> NEW HOST
router.post('/host/:hostId', createHost)

export default router;