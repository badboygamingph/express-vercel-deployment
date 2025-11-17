require('dotenv').config({ path: __dirname + '/.env' });
const app = require('./app');
const port = 3001;

// Start the server
app.listen(port, () => {
    console.log(`Test server running at http://localhost:${port}`);
    console.log('Available routes:');
    console.log('- POST /forgot-password/request-otp');
    console.log('- POST /forgot-password/verify-otp');
    console.log('- POST /forgot-password/reset');
    console.log('- POST /login');
    console.log('- POST /logout');
});