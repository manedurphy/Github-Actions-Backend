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

app.get('/api/another', (req, res) => { 
    res.json({message: 'Yet another route that won\'t be deployed due to failing test'});
});

app.get('/api/docker', (req, res) => {
    res.json({ message: 'Docker route!' });
});

module.exports = app;