async function testEndpoint() {
    try {
        const response = await fetch('http://localhost:5000/forgot-password/reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'node-fetch/1.0'
            },
            body: JSON.stringify({
                email: 'darielganzon2023@gmail.com',
                newPassword: 'TestPassword123!',
                confirmNewPassword: 'TestPassword123!'
            })
        });
        
        const data = await response.json();
        console.log('Response status:', response.status);
        console.log('Response data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

testEndpoint();