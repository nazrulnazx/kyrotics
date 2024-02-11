const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 80;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set views folder
app.set('views', 'web');

// Middleware to serve static files (CSS, images, etc.)
app.use(express.static('web'));

// Routes
app.get('/', (req, res) => {
    // res.render('home', { pageTitle: 'Home', activeUrl: '/' });
    res.render('home', { pageTitle: 'Home', activeUrl: '/' });
});

// Routes
app.get('/contact-us', (req, res) => {
    res.render('contact-us', { pageTitle: 'Contact Us', activeUrl: '/contact-us' });
});


// Routes
app.get('/computer-vision', (req, res) => {
    res.render('computer-vision', { pageTitle: 'Computer Vision', activeUrl: '/computer-vision' });
});


// Routes
app.get('/data-analytics', (req, res) => {
    res.render('data-analytics', { pageTitle: 'Data Analytics', activeUrl: '/data-analytics' });
});

// Routes
app.get('/ai-enabled-app-development', (req, res) => {
    res.render('ai-enabled-app-development', { pageTitle: 'AI Enabled App Development', activeUrl: '/ai-enabled-app-development' });
});


// Routes
app.get('/natural-language-processing', (req, res) => {
    res.render('natural-language-processing', { pageTitle: 'Natural Language Processing', activeUrl: '/natural-language-processing' });
});


// Routes
app.get('/sectors', (req, res) => {
    res.render('sectors', { pageTitle: 'Contact Us', activeUrl: '/sectors' });
});


// Routes
app.get('/about-us', (req, res) => {
    res.render('about-us', { pageTitle: 'About Us', activeUrl: '/about-us' });
});



// Legals Start

// Routes
app.get('/cookie-policy', (req, res) => {
    res.render('legal/cookie-policy', { pageTitle: 'Cookie Policy', activeUrl: '/cookie-policy' });
});

// Routes
app.get('/privacy-policy', (req, res) => {
    res.render('legal/privacy-policy', { pageTitle: 'Privacy Policy', activeUrl: '/privacy-policy' });
});

// Routes
app.get('/terms-of-conditions', (req, res) => {
    res.render('legal/terms-of-conditions', { pageTitle: 'Terms Of Conditions', activeUrl: '/terms-of-conditions' });
});

// Routes
app.get('/terms-of-use', (req, res) => {
    res.render('legal/terms-of-use', { pageTitle: 'Terms Of Use', activeUrl: '/terms-of-use' });
});

// Legals End



app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: '404 | Page Not Found', activeUrl: '/404' });
});


// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});