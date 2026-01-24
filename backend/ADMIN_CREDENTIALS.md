# Admin Login Credentials

## Default Admin Account

After running the setup script, you can login with:

**Email:** `admin@windsmitair.com`  
**Password:** `admin123`

⚠️ **IMPORTANT:** Change this password immediately after first login for security!

## How to Create Admin Account

### Method 1: Using the Setup Script (Easiest)

1. Make sure your `.env` file is configured with MongoDB URI
2. Run the script:
```bash
npm run create-admin
```

This will create a default admin account with:
- Email: `admin@windsmitair.com`
- Password: `admin123`

### Method 2: Using API (Manual)

Make a POST request to `http://localhost:5000/api/auth/register`:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@windsmitair.com",
    "password": "your-secure-password"
  }'
```

Or use Postman/Thunder Client:
- URL: `POST http://localhost:5000/api/auth/register`
- Body (JSON):
```json
{
  "username": "admin",
  "email": "admin@windsmitair.com",
  "password": "your-password"
}
```

## Login

Once you have an admin account, login at:
- Frontend: `http://localhost:3000/admin`
- Or use the API: `POST http://localhost:5000/api/auth/login`

## Security Note

For production, make sure to:
1. Change the default password
2. Use a strong, unique password
3. Update `JWT_SECRET` in `.env` to a secure random string
4. Consider implementing additional security measures
