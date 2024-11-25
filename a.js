const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;

app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

app.listen(7000, '0.0.0.0', () => {
    console.log('Server is running on port 7000');
});
