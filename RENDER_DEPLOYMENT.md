# Render Deployment Guide - Environment Variables

## Backend Environment Variables (Node.js Service)

When deploying your backend to Render, add these environment variables in the Render dashboard:

### Required Variables:

```
MONGODB_URI=mongodb+srv://windsmit:wind123@cluster0.fbwi4qa.mongodb.net/?appName=Cluster0
PORT=10000
JWT_SECRET=your-super-secret-jwt-key-change-this-to-random-string
NODE_ENV=production
```

### Variable Details:

1. **MONGODB_URI**
   - Value: `mongodb+srv://windsmit:wind123@cluster0.fbwi4qa.mongodb.net/?appName=Cluster0`
   - Description: Your MongoDB connection string
   - Required: Yes

2. **PORT**
   - Value: `10000` (or let Render assign automatically)
   - Description: Server port (Render usually assigns this automatically)
   - Required: No (Render provides PORT automatically)

3. **JWT_SECRET**
   - Value: Generate a strong random string (e.g., use: `openssl rand -base64 32`)
   - Example: `windsmit-air-secret-key-2024-production-xyz123abc456`
   - Description: Secret key for JWT token signing
   - Required: Yes
   - ⚠️ **IMPORTANT**: Use a strong, unique secret in production!

4. **NODE_ENV**
   - Value: `production`
   - Description: Environment mode
   - Required: Recommended

### Backend Build & Start Commands (Render):

**Build Command:**
```bash
npm install
```

**Start Command:**
```bash
npm start
```

---

## Frontend Environment Variables (Static Site)

When deploying your frontend to Render as a Static Site, add these environment variables:

### Required Variables:

```
VITE_API_URL=https://your-backend-service.onrender.com
```

### Variable Details:

1. **VITE_API_URL**
   - Value: `https://your-backend-service.onrender.com` (replace with your actual backend URL)
   - Description: Backend API base URL
   - Required: Yes
   - Note: Must start with `VITE_` to be accessible in Vite apps

### Frontend Build & Publish Directory (Render):

**Build Command:**
```bash
npm install && npm run build
```

**Publish Directory:**
```
dist
```

---

## Step-by-Step Render Setup

### Backend Setup:

1. **Create New Web Service** in Render
2. **Connect your repository**
3. **Settings:**
   - **Name:** `windsmit-backend` (or your choice)
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Root Directory:** `backend`

4. **Environment Variables:**
   - Add all variables listed above
   - Make sure `JWT_SECRET` is a strong random string

5. **Deploy**

### Frontend Setup:

1. **Create New Static Site** in Render
2. **Connect your repository**
3. **Settings:**
   - **Name:** `windsmit-frontend` (or your choice)
   - **Build Command:** `cd frontend && npm install && npm run build`
   - **Publish Directory:** `frontend/dist`
   - **Root Directory:** `frontend` (optional)

4. **Environment Variables:**
   - `VITE_API_URL` = Your backend URL (e.g., `https://windsmit-backend.onrender.com`)

5. **Deploy**

---

## Update Frontend API URL

After deploying, you need to update the frontend code to use the environment variable:

### Update `frontend/src/pages/Admin.jsx`:

Change:
```javascript
const API_URL = 'http://localhost:5000/api'
```

To:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
```

### Update `frontend/src/pages/Blog.jsx`:

Change:
```javascript
const response = await fetch('http://localhost:5000/api/blog?published=true')
```

To:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
const response = await fetch(`${API_URL}/blog?published=true`)
```

### Update `frontend/src/pages/BlogPostDetail.jsx`:

Change:
```javascript
const response = await fetch(`http://localhost:5000/api/blog/${id}`)
```

To:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
const response = await fetch(`${API_URL}/blog/${id}`)
```

---

## Security Notes

1. **Never commit `.env` files** to Git
2. **Use strong JWT_SECRET** in production
3. **Enable CORS** properly (already configured in backend)
4. **Use HTTPS** (Render provides this automatically)
5. **Keep MongoDB credentials secure**

---

## Testing After Deployment

1. **Backend Health Check:**
   - Visit: `https://your-backend.onrender.com/api/health`
   - Should return: `{"status":"OK","message":"Server is running"}`

2. **Frontend:**
   - Visit your frontend URL
   - Test admin login
   - Test blog page

3. **Create Admin Account:**
   - After backend is deployed, run the create-admin script locally pointing to production DB, OR
   - Use the register endpoint: `POST https://your-backend.onrender.com/api/auth/register`

---

## Quick Reference

### Backend Environment Variables:
```
MONGODB_URI=mongodb+srv://windsmit:wind123@cluster0.fbwi4qa.mongodb.net/?appName=Cluster0
JWT_SECRET=your-strong-random-secret-key-here
NODE_ENV=production
```

### Frontend Environment Variables:
```
VITE_API_URL=https://your-backend-service.onrender.com
```
