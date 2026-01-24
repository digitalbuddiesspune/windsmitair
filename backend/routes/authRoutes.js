import express from 'express'
import Admin from '../models/Admin.js'
import jwt from 'jsonwebtoken'

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

// Register admin (only for initial setup)
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ $or: [{ email }, { username }] })
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin already exists' })
    }
    
    const admin = new Admin({ username, email, password })
    await admin.save()
    
    const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: '7d' })
    res.status(201).json({ token, admin: { id: admin._id, username: admin.username, email: admin.email } })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    
    const admin = await Admin.findOne({ email })
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    
    const isMatch = await admin.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    
    const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: '7d' })
    res.json({ token, admin: { id: admin._id, username: admin.username, email: admin.email } })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
