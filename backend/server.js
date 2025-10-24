import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import adminRouter from './routes/adminRoutes.js'
import hostRouter from './routes/hostRoutes.js'
import hostVanRouter from './routes/hostVanRoutes.js'
import vanRouter from './routes/vanRoutes.js'

// Config
dotenv.config()
const app = express()

app.use(cors({
    origin: [process.env.LOCALCORSORIGIN, process.env.CORSORIGIN],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))


app.use(express.json())

// Routes
app.use("/api/admin", adminRouter)
app.use("/api/host", hostRouter)
app.use("/api/host/vans", hostVanRouter)
app.use("/api", vanRouter)

// ROOT ENDPOINT
app.get("/", (req, res) => {
    res.send("Vanlife API is running")
})


// ERROR HANDLING
app.use((err, req, res, next) => {
    console.error("Server Error:", err)
    res.status(500).json({
        message: "Internal server error",
        error: err.message
    })
})

// START SERVER
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port: http://localhost:${PORT}`))