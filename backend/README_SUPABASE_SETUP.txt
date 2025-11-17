Supabase Setup Instructions
=========================

1. Get Your Supabase Credentials:
   - Go to https://app.supabase.io/
   - Select your project
   - Go to "Project Settings" → "API"
   - Copy your "Project URL" and "anon" key

2. Update Your Environment Variables:
   - For local development:
     * Open the `.env` file in this directory
     * Replace `your_supabase_project_url` with your actual Project URL
     * Replace `your_supabase_anon_key` with your actual anon key
   - For Vercel deployment:
     * Go to your Vercel dashboard
     * Select your project
     * Go to "Settings" → "Environment Variables"
     * Add the following environment variables:
       - SUPABASE_URL: Your Supabase project URL
       - SUPABASE_KEY: Your Supabase anon key
       - EMAIL_USER: Your email address
       - EMAIL_PASS: Your email app password
       - JWT_SECRET: A strong secret for JWT tokens

3. Create Database Tables:
   - In the Supabase dashboard, go to "SQL Editor" in the left sidebar
   - Copy the entire content of `sql/supabase_tables.sql` and paste it into the SQL Editor
   - Click "RUN" to execute the script
   - This will create all three tables (users, accounts, otps) with proper relationships

5. Redeploy Your Application:
   - After setting environment variables in Vercel, you need to redeploy your application
   - Go to your Vercel dashboard
   - Select your project
   - Go to "Deployments"
   - Click "Redeploy" or push a new commit to trigger a new deployment

6. Test Your Setup:
   - Run `npm start` in this directory for local testing
   - The application should connect to your Supabase database

Example .env configuration:
SUPABASE_URL=https://nttadnyxpbuwuhgtpvjh.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50dGFkbnl4cGJ1d3VoZ3RwdmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzMjU4NTIsImV4cCI6MjA3ODkwMTg1Mn0.W666WUJcpgsHRAU-sXNFTmfQzkOuLijFWUfCQT1-rys
JWT_SECRET=mybearertoken123
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=darielganzon2003@gmail.com
EMAIL_PASS="azfs mmtr jhxh tsyu"