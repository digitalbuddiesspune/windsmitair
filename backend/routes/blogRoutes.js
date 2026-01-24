import express from 'express'
import BlogPost from '../models/BlogPost.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const { category, published } = req.query
    const filter = {}
    
    if (category && category !== 'all') {
      filter.category = category
    }
    
    if (published !== undefined) {
      filter.published = published === 'true'
    }
    
    const posts = await BlogPost.find(filter).sort({ createdAt: -1 })
    res.json(posts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get single blog post
router.get('/:id', async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' })
    }
    res.json(post)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Create new blog post (protected)
router.post('/', authenticate, async (req, res) => {
  try {
    const post = new BlogPost(req.body)
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Update blog post (protected)
router.put('/:id', authenticate, async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' })
    }
    res.json(post)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Delete blog post (protected)
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id)
    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' })
    }
    res.json({ message: 'Blog post deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
