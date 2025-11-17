// Simple script to verify routes are defined correctly
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const accountRoutes = require('./routes/accountRoutes');

console.log('Auth Routes:');
console.log(Object.keys(authRoutes.routes).map(route => `${route.methods} ${route.path}`));

console.log('\nUser Routes:');
console.log(Object.keys(userRoutes.routes).map(route => `${route.methods} ${route.path}`));

console.log('\nItem Routes:');
console.log(Object.keys(itemRoutes.routes).map(route => `${route.methods} ${route.path}`));

console.log('\nAccount Routes:');
console.log(Object.keys(accountRoutes.routes).map(route => `${route.methods} ${route.path}`));