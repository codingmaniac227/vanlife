// backend/middleware/authMiddleware.js

export const requireAdmin = (req, res, next) => {
    try {
        // ⚙️ You can enhance this later with real token/session logic
        const userRole = req.headers['x-user-role']

        if (userRole !== 'admin') {
            return res.status(403).json({ message: 'Access denied: admin only' })
        }

        next()
    } catch (error) {
        next(error)
    }
}