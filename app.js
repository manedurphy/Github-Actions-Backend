const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
    res.json({message: 'You have hit this end point!'});
});

app.get('/api/added', (req, res) => {
    res.json({ mesage: 'Added route has been deployed by GitHub actions!' });
})

app.listen(5000, () => console.log('Server started on port 5000'));