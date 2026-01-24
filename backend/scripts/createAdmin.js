import mongoose from 'mongoose'
import Admin from '../models/Admin.js'
import dotenv from 'dotenv'

dotenv.config()

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@windsmitair.com' })
    if (existingAdmin) {
      console.log('Admin already exists!')
      console.log('Email: admin@windsmitair.com')
      process.exit(0)
    }

    // Create default admin
    const admin = new Admin({
      username: 'admin',
      email: 'admin@windsmitair.com',
      password: 'admin123' // Default password - change this after first login!
    })

    await admin.save()
    console.log('✅ Default admin created successfully!')
    console.log('Email: admin@windsmitair.com')
    console.log('Password: admin123')
    console.log('\n⚠️  IMPORTANT: Change the password after first login!')
    
    process.exit(0)
  } catch (error) {
    console.error('Error creating admin:', error)
    process.exit(1)
  }
}

createAdmin()
