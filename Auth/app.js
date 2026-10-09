 // const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
// app.use(cookieParser())

app.get('/', function(req, res){
    /* how to do encryption 
     bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash("sanika", salt, function(err, hash){
           console.log(hash);
        })
     }) 
    // res.cookie("name", "lam");  // set cookies
    // res.send("done");
    // to decrypt / compare
    bcrypt.compare("sanika","$2b$10$.TrfDBrXfIZnR1/N5Jjp7.S5rXLU8SED9Iiu.H2l8.g0M2Q1z1sjG", function(err, result){
        console.log(result)
    }) */
   let token = jwt.sign({email: "sham@gmail.com"}, "secret")
   res.cookie("token",token); 
   console.log(token);
})

/*
app.get('/read', function(req, res){
  // console.log(req.cookies);  //read cookies
    res.send("lets go");
})
*/

app.listen(3000)