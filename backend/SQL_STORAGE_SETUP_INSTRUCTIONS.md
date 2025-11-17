# Supabase Storage Setup Instructions

To ensure that the Supabase storage bucket is properly communicating and working correctly with your application, follow these steps:

## 1. Create the 'images' Bucket

1. Go to your Supabase dashboard: https://app.supabase.io/
2. Select your project
3. Navigate to Storage → Buckets in the left sidebar
4. Click "New bucket"
5. Name it "images"
6. Set it to "Public"
7. Click "Create"

## 2. Create Required Folders

1. Click on the "images" bucket
2. Click "Create folder"
3. Create a folder named "accounts"
4. Create another folder named "profile-pictures"

## 3. Set Up Row-Level Security (RLS) Policies

1. Go to "SQL Editor" in the left sidebar of your Supabase dashboard
2. Run the SQL commands from [sql/supabase_storage_policies.sql](file:///c%3A/xampp/htdocs/fullstack%20express%20final%20backup/fullstack/backend/sql/supabase_storage_policies.sql):

```sql
-- COMPLETE SUPABASE STORAGE POLICY (SAFE VERSION)
-- Make the bucket public
UPDATE storage.buckets
SET public = true
WHERE id = 'images';

-- Allow public read-access
CREATE POLICY "Public Read Images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'images');

-- Allow authenticated users to upload into the bucket
CREATE POLICY "Authenticated Upload Images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'images');

-- Allow authenticated users to delete files they uploaded
CREATE POLICY "Authenticated Delete Images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'images');
```

## 4. Test the Storage Setup

Run the test script to verify everything is working:

```bash
cd backend
node test_supabase_storage.js
```

## 5. Verify Environment Variables

Ensure your `.env` file contains the correct Supabase credentials:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
```

## Troubleshooting

If you encounter issues:

1. **Bucket not found error**: Make sure you've created the 'images' bucket in your Supabase dashboard
2. **Policy violation error**: Ensure you've run the SQL policies from [supabase_storage_policies.sql](file:///c%3A/xampp/htdocs/fullstack%20express%20final%20backup/fullstack/backend/sql/supabase_storage_policies.sql)
3. **Authentication error**: Verify your SUPABASE_URL and SUPABASE_KEY in your `.env` file

## How the Application Uses Storage

The application uses Supabase Storage in the following ways:

1. **Account Images**: Uploaded to the 'accounts/' folder in the 'images' bucket
2. **Profile Pictures**: Uploaded to the 'profile-pictures/' folder in the 'images' bucket
3. **Default Images**: Served from public Supabase Storage URLs
4. **File Operations**: All file operations go through the [supabaseStorage.js](file:///c%3A/xampp/htdocs/fullstack%20express%20final%20backup/fullstack/backend/utils/supabaseStorage.js) utility which handles:
   - Bucket existence verification
   - Error handling and reporting
   - File upload, deletion, and URL generation

The storage utility now includes enhanced error handling that provides specific guidance for common issues, making it easier to diagnose and fix problems.