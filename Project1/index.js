const express = require('express');
const app = express();
const path = require('path'); // init path 

app.use(express.json());  // Parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the "public" directory

// setup middleware to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.set('view engine', 'ejs'); // Set EJS as the view engine for rendering templates

app.get('/', (req, res) => {
  res.render('index'); // Render the index.ejs template
}       ); 

app.get("/profile/:username",function(req,res){ // Route with a dynamic parameter for username
    res.send('UR username is: ' + req.params.username);  // Send a response with the username extracted from the URL
});

//  create a route for the form page that will render the form.ejs template
app.get("/profile/:name/:age",function(req,res){ // Route with dynamic parameters for name and age
    res.send('UR name is: ' + req.params.name + ' and UR age is: ' + req.params.age);  // Send a response with the name and age extracted from the URL
}   );


app.listen(3000,function() {
  console.log('Server is running on port 3000');
}       )

 // console.log(__dirname+"/public"); // Log the path to the "public" directory  
