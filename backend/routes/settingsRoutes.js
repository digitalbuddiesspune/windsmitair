import express from 'express'
import Settings from '../models/Settings.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

// Get setting by key (public for showStories)
router.get('/:key', async (req, res) => {
  try {
    const setting = await Settings.findOne({ key: req.params.key })
    if (!setting) {
      // Return default value if setting doesn't exist
      if (req.params.key === 'showStories') {
        return res.json({ key: 'showStories', value: true })
      }
      return res.status(404).json({ error: 'Setting not found' })
    }
    res.json(setting)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update setting (protected - admin only)
router.put('/:key', authenticate, async (req, res) => {
  try {
    const { value } = req.body
    const setting = await Settings.findOneAndUpdate(
      { key: req.params.key },
      { value },
      { new: true, upsert: true }
    )
    res.json(setting)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
