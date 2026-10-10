const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("jas");
})

app.listen(3000);