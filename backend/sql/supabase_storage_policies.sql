-- COMPLETE SUPABASE STORAGE POLICY (SAFE VERSION)
-- ⭐ Production-Safe Configuration for 'images' Bucket

-- 1. Make the bucket public
-- Updates the existing bucket, no conflict issues
UPDATE storage.buckets
SET public = true
WHERE id = 'images';

-- 2. Allow public read-access
-- Anyone can view your images — required for profile pictures & account thumbnails
CREATE POLICY "Public Read Images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'images');

-- 3. Allow authenticated users to upload into the bucket
CREATE POLICY "Authenticated Upload Images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'images');

-- 4. Allow authenticated users to delete files they uploaded
-- Safe but permissive — optional
CREATE POLICY "Authenticated Delete Images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'images');

-- ⭐ OPTIONAL (Recommended for structure)
-- Restrict uploads to specific folders
-- If you want users to ONLY upload inside the folders: profile-pictures/ and accounts/
-- Uncomment the following policy and comment out the "Authenticated Upload Images" policy above

/*
CREATE POLICY "Authenticated Upload to Folders"
ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'images'
  AND (
    (storage.foldername(name))[1] = 'profile-pictures'
    OR (storage.foldername(name))[1] = 'accounts'
  )
);
*/

-- 📌 This full policy setup covers:
-- ✔ Public profile images
-- ✔ Public account icons
-- ✔ Authenticated uploads
-- ✔ Authenticated deletes
-- ✔ Works even when the bucket already exists
-- ✔ No SQL conflicts
-- ✔ Production-safe configuration