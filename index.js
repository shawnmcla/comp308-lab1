/**
Lab1 by Shawn McLaughlin
 */

const express = require('express')
const path = require('path');
const app = express()

/** Get root (index.html) */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/** Get about.html */
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

/** Get contact.html */
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(3000);
console.log("Running on port 3000");