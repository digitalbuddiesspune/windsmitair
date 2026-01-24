# Render Environment Variables Setup

## 🔧 Backend Environment Variables (Node.js Web Service)

Add these in Render Dashboard → Your Backend Service → Environment:

### Required Variables:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `MONGODB_URI` | `mongodb+srv://windsmit:wind123@cluster0.fbwi4qa.mongodb.net/?appName=Cluster0` | MongoDB connection string |
| `JWT_SECRET` | `windsmit-air-secret-key-2024-production-xyz123abc456` | Secret for JWT tokens (use a strong random string) |
| `NODE_ENV` | `production` | Environment mode |
| `PORT` | (Auto-assigned by Render) | Server port (Render provides this automatically) |

### Copy-Paste Format:

```
MONGODB_URI=mongodb+srv://windsmit:wind123@cluster0.fbwi4qa.mongodb.net/?appName=Cluster0
JWT_SECRET=windsmit-air-secret-key-2024-production-xyz123abc456
NODE_ENV=production
```

⚠️ **Important**: Generate a strong random string for `JWT_SECRET` in production!

---

## 🎨 Frontend Environment Variables (Static Site)

Add these in Render Dashboard → Your Frontend Static Site → Environment:

### Required Variables:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `VITE_API_URL` | `https://your-backend-service.onrender.com` | Your backend API URL (replace with your actual backend URL) |

### Copy-Paste Format:

```
VITE_API_URL=https://your-backend-service.onrender.com
```

**Note**: 
- Replace `your-backend-service` with your actual backend service name
- Example: If your backend is `windsmit-backend.onrender.com`, use: `https://windsmit-backend.onrender.com`
- Must start with `VITE_` to be accessible in Vite apps

---

## 📋 Quick Setup Checklist

### Backend Setup:
- [ ] Create Web Service in Render
- [ ] Set Root Directory: `backend`
- [ ] Build Command: `npm install`
- [ ] Start Command: `npm start`
- [ ] Add environment variables (see above)
- [ ] Deploy

### Frontend Setup:
- [ ] Create Static Site in Render
- [ ] Build Command: `cd frontend && npm install && npm run build`
- [ ] Publish Directory: `frontend/dist`
- [ ] Add `VITE_API_URL` environment variable
- [ ] Deploy

---

## 🔍 How to Find Your Backend URL

After deploying your backend:
1. Go to your backend service in Render
2. Copy the URL (e.g., `https://windsmit-backend.onrender.com`)
3. Use this as your `VITE_API_URL` value (without `/api` at the end)

---

## ✅ Testing

After deployment, test:
1. Backend: `https://your-backend.onrender.com/api/health`
2. Frontend: Visit your frontend URL
3. Admin Login: Go to `/admin` and login
4. Blog: Check if posts load correctly

---

## 🛠️ Generate Strong JWT_SECRET

Run this command to generate a secure JWT secret:

```bash
openssl rand -base64 32
```

Or use an online generator and copy a long random string.
