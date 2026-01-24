import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'HVAC', 'Air Conditioning', 'BMS', 'Maintenance', 'Energy Efficiency']

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
    const fetchPosts = async () => {
      try {
        const url = `${API_URL}/blog?published=true`
        console.log('Fetching posts from:', url)
        const response = await fetch(url)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        setPosts(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching posts:', error)
        // Fallback to empty array if API fails
        setPosts([])
        setLoading(false)
      }
    }
    fetchPosts()
  }, [API_URL])

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#4CAF50]">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and trends in HVAC, air conditioning, and building management systems.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <span className="text-sm font-semibold text-gray-700">Filter by:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#4CAF50] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4CAF50]"></div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#4CAF50] text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span>{formatDate(post.createdAt || post.date)}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4CAF50] transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                          <span className="text-[#4CAF50] text-xs font-bold">WA</span>
                        </div>
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      
                      <Link
                        to={`/blog/${post._id || post.id}`}
                        className="text-[#4CAF50] text-sm font-semibold hover:underline flex items-center gap-1"
                      >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Subscribe to our newsletter for the latest HVAC insights and tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            />
            <button className="px-8 py-3 bg-[#4CAF50] text-white font-semibold rounded-lg hover:bg-[#45a049] transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Blog
