const express = require('express');
const app = express(),  
    port = 3080;

app.get('/test/get', (req, res) => {
    console.log('/test/get called!!!!!!!!!')
    res.json(["hi"]);
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});