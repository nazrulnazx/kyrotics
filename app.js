const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set views folder
app.set('views', 'web');

// Middleware to serve static files (CSS, images, etc.)
app.use(express.static('web'));

// Routes
app.get('/', (req, res) => {
    
    // res.render('home', { pageTitle: 'Home', activeUrl: '/' });
    res.render('home-chandan', { pageTitle: 'Home', activeUrl: '/' });

});

// Routes
app.get('/contact-us', (req, res) => {
    res.render('contact-us', { pageTitle: 'Contact Us', activeUrl: '/contact-us' });
});


// Routes
app.get('/about-us', (req, res) => {
    res.render('about-us', { pageTitle: 'About Us', activeUrl: '/about-us' });
});




// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});