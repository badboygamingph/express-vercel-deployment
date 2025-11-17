require('dotenv').config();

console.log('Environment Variables Check:');
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? 'Loaded' : 'Not found');
console.log('SUPABASE_KEY:', process.env.SUPABASE_KEY ? 'Loaded' : 'Not found');
console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Loaded' : 'Not found');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Loaded' : 'Not found');

if (process.env.SUPABASE_URL) {
  console.log('SUPABASE_URL value:', process.env.SUPABASE_URL.substring(0, 20) + '...');
}

module.exports = {};