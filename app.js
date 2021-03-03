const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
    res.json({message: 'You have hit this end point!'});
});

app.listen(5000, () => console.log('Server started on port 5000'));