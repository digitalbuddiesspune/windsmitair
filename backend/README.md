# Windsmit Air Backend

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory with:
```
MONGODB_URI=mongodb+srv://windsmit:wind123@cluster0.fbwi4qa.mongodb.net/?appName=Cluster0
PORT=5000
JWT_SECRET=your-secret-key-change-in-production
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new admin (for initial setup)
- `POST /api/auth/login` - Login admin

### Blog Posts
- `GET /api/blog` - Get all blog posts (query params: `category`, `published`)
- `GET /api/blog/:id` - Get single blog post
- `POST /api/blog` - Create new blog post (requires auth)
- `PUT /api/blog/:id` - Update blog post (requires auth)
- `DELETE /api/blog/:id` - Delete blog post (requires auth)

## Initial Admin Setup

To create your first admin account, make a POST request to `/api/auth/register`:

```json
{
  "username": "admin",
  "email": "admin@windsmitair.com",
  "password": "your-secure-password"
}
```

Then use the email and password to login at `/api/auth/login`.
