const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

app.listen(5000,() => {
    console.log('Server is running on port 5000');
});
