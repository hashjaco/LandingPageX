const express = require('express');
const path = require('path');
const app = express();
const PORT = 8081;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req, res) => {
    res.send('Sending home page');
});

app.listen(PORT, ()=> {
    console.log("Server started on port ${PORT}")
});