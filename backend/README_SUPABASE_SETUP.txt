Supabase Setup Instructions
=========================

1. Get Your Supabase Credentials:
   - Go to https://app.supabase.io/
   - Select your project
   - Go to "Project Settings" → "API"
   - Copy your "Project URL" and "anon" key

2. Update Your Environment Variables:
   - Open the `.env` file in this directory
   - Replace `your_supabase_project_url` with your actual Project URL
   - Replace `your_supabase_anon_key` with your actual anon key

3. Create Database Tables:
   - In the Supabase dashboard, go to "Table Editor"
   - Create the following tables using the schema in `sql/supabase_tables.sql`:
     * users
     * accounts
     * otps

4. Set Up Foreign Key Relationships:
   - In the accounts table, set user_id as a foreign key referencing users.id
   - Configure the relationship to cascade on delete

5. Test Your Setup:
   - Run `npm start` in this directory
   - The application should connect to your Supabase database

Example .env configuration:
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-actual-anon-key-here
JWT_SECRET=mybearertoken123
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password