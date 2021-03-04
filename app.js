const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
    res.json({message: 'You have hit this end point!'});
});

app.get('/api/added', (req, res) => {
    res.json({ message: 'Added route has been deployed by GitHub actions!' });
});

app.get('/api/fail', (req, res) => {
    res.json({message: 'You have failed :('});
});

module.exports = app;