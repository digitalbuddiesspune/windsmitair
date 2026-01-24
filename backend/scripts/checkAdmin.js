import mongoose from 'mongoose'
import Admin from '../models/Admin.js'
import dotenv from 'dotenv'

dotenv.config()

const checkAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ Connected to MongoDB\n')

    const admins = await Admin.find()
    
    if (admins.length === 0) {
      console.log('❌ No admin accounts found!')
      console.log('\nTo create an admin account, run:')
      console.log('  npm run create-admin')
      console.log('\nOr register via API:')
      console.log('  POST http://localhost:5000/api/auth/register')
      console.log('  Body: { "username": "admin", "email": "admin@windsmitair.com", "password": "admin123" }')
    } else {
      console.log(`✅ Found ${admins.length} admin account(s):\n`)
      admins.forEach((admin, index) => {
        console.log(`${index + 1}. Username: ${admin.username}`)
        console.log(`   Email: ${admin.email}`)
        console.log(`   Created: ${admin.createdAt}\n`)
      })
    }
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

checkAdmin()
