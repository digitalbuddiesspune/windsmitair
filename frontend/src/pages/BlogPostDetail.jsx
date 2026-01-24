import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Footer from '../components/Footer'

function BlogPostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Normalize API URL - remove trailing slashes and ensure proper format
  const getApiUrl = () => {
    const envUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
    // Remove trailing slashes
    let cleanUrl = envUrl.replace(/\/+$/, '')
    // If URL doesn't start with http, add https://
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = `https://${cleanUrl}`
    }
    // Ensure /api is included if not present (for production URLs)
    if (!cleanUrl.includes('/api') && !cleanUrl.includes('localhost')) {
      cleanUrl = `${cleanUrl}/api`
    }
    return cleanUrl
  }

  const API_URL = getApiUrl()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        const url = `${API_URL}/blog/${id}`
        console.log('Fetching post from:', url)
        const response = await fetch(url)
        
        if (!response.ok) {
          throw new Error('Post not found')
        }
        
        const data = await response.json()
        setPost(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching post:', error)
        setError(error.message)
        setLoading(false)
      }
    }

    if (id) {
      fetchPost()
    }
  }, [id, API_URL])

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4CAF50] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The blog post you are looking for does not exist.'}</p>
          <Link
            to="/blog"
            className="inline-block px-6 py-3 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Image */}
      <div className="relative h-64 md:h-96 overflow-hidden bg-gray-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="px-3 py-1 bg-[#4CAF50] text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/90 text-sm">
              <span>{formatDate(post.createdAt)}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-[#4CAF50] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </button>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Excerpt */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-[#4CAF50]">
          <p className="text-lg text-gray-700 leading-relaxed italic">
            {post.excerpt}
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-base md:text-lg">
                {paragraph || '\u00A0'}
              </p>
            ))}
          </div>
        </div>

        {/* Author Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
              <span className="text-[#4CAF50] text-xl font-bold">WA</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{post.author}</h3>
              <p className="text-sm text-gray-600">Windsmit Air Team</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            to="/blog"
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            ← All Posts
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#4CAF50] hover:text-white flex items-center justify-center transition-colors"
              aria-label="Share on Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#4CAF50] hover:text-white flex items-center justify-center transition-colors"
              aria-label="Share on Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#4CAF50] hover:text-white flex items-center justify-center transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Related Posts</h2>
          <div className="text-center py-8">
            <Link
              to="/blog"
              className="inline-block px-8 py-3 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-colors"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default BlogPostDetail
