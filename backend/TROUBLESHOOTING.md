# Troubleshooting 401 Unauthorized Error

## Common Causes

### 1. **No Admin Account Exists**
The most common reason for 401 error is that no admin account has been created yet.

**Solution:**
```bash
cd backend
npm run create-admin
```

This will create:
- Email: `admin@windsmitair.com`
- Password: `admin123`

### 2. **Backend Server Not Running**
Make sure your backend server is running on port 5000.

**Check:**
```bash
cd backend
npm start
```

You should see:
```
✅ Connected to MongoDB
🚀 Server running on http://localhost:5000
```

### 3. **Wrong Credentials**
Double-check you're using the correct email and password.

**Check existing admins:**
```bash
cd backend
npm run check-admin
```

### 4. **MongoDB Connection Issue**
Verify your `.env` file has the correct MongoDB URI:
```
MONGODB_URI=mongodb+srv://windsmit:wind123@cluster0.fbwi4qa.mongodb.net/?appName=Cluster0
```

### 5. **CORS or Network Issue**
Make sure:
- Backend is running on `http://localhost:5000`
- Frontend is trying to connect to the correct URL
- No firewall blocking the connection

## Step-by-Step Fix

1. **Check if backend is running:**
   ```bash
   cd backend
   npm start
   ```

2. **Check if admin exists:**
   ```bash
   npm run check-admin
   ```

3. **If no admin exists, create one:**
   ```bash
   npm run create-admin
   ```

4. **Try logging in with:**
   - Email: `admin@windsmitair.com`
   - Password: `admin123`

5. **If still not working, check browser console for detailed error messages**

## Manual Registration via API

If the script doesn't work, register manually:

**Using curl:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@windsmitair.com","password":"admin123"}'
```

**Using Postman:**
- Method: POST
- URL: `http://localhost:5000/api/auth/register`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "username": "admin",
  "email": "admin@windsmitair.com",
  "password": "admin123"
}
```
