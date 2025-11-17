require('dotenv').config({ path: __dirname + '/.env' });
const supabase = require('./supabaseClient');

// Test the actual endpoint
async function testForgotPasswordEndpoint() {
    console.log('Testing forgot password endpoint...');
    
    try {
        // Test data
        const testData = {
            email: 'darielganzon2023@gmail.com',
            newPassword: 'TestPassword123!',
            confirmNewPassword: 'TestPassword123!'
        };
        
        console.log('Sending request to endpoint with data:', testData);
        
        // Since we can't easily test the actual HTTP endpoint from Node.js without starting the server,
        // let's directly test the controller function
        const authController = require('./controllers/authController');
        
        // Mock request and response objects
        const mockReq = {
            body: testData
        };
        
        const mockRes = {
            status: function(code) {
                this.statusCode = code;
                console.log('Response status:', code);
                return this;
            },
            json: function(data) {
                console.log('Response data:', data);
                return this;
            }
        };
        
        console.log('Calling resetPassword controller function directly...');
        await authController.resetPassword(mockReq, mockRes);
        
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

testForgotPasswordEndpoint();