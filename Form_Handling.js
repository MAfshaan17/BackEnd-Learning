// form handling 
// handle backend process of forms and making sure the data is sent to the backend and the response is handled properly

// Session cookie
//cookie is something that is stored in the browser and sent to the server with every request.
//  It is used to store information about the user and their session.
// session is a way to store information about the user on the server side. 
// It is used to keep track of the user's state and data across multiple requests.


const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res)  {
    res.send('Form Handling Example');
});
 
app.get("/form", function(req, res)  {
    res.send("i am the form page");
});

app.listen(3000)
