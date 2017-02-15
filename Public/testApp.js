const express = require('express');

const app = express();

app.use(express.static('Public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});


app.listen(3000);