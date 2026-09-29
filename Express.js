/* All about Express.js 
It is a web application framework for Node.js, 
designed for building web applications and APIs.
 It provides a robust set of features for web and mobile applications, including routing, middleware support, template engines, and more.
  Express.js simplifies the process of handling HTTP requests and responses, making it easier to create server-side applications.
*/

const express = require("express");
const app = express();

/* app.get("/", function (req, res) {
    res.send("Hello World");
})

app.listen(3000, function () {
    console.log("Server is running on port 3000");
})
        */

// Routes
// / after this thing evrything is route we can use to add fetch pages sab
/* app.get("/", function (req, res) {
    res.send(" hi i am afshaan");
})

app.get("/about", function (req, res) {
    res.send(" This is about page");
})
 
app.get("/contact", function (req, res) {
    res.send(" This is contact page");
})

app.listen(3000);
*/

// Middleware
//  is something which is used to handle requests and responses in express.js.
//  It is a function which has access to the request object, response object and next function in the application’s request-response cycle.
//  It can execute any code, make changes to the request and response objects, end the request-response cycle, or call the next middleware function in the stack.

app.use(function (req, res, next) {
    console.log("This is middleware");
    next(); // next() is used to pass control to the next middleware function in the stack. If we don't call next(), the request will be left hanging and the client will not receive a response.
}   );
//use to use middleware in express.js. It is used to add middleware functions to the application.
//  It can be used to add middleware functions to the application for all routes or for specific routes.

app.use(function (req, res, next) {
    console.log("This is second middleware");
    next();
})

app.get("/", function (req, res) {
    res.send(" hi i am afshaan");
})   

// get is used to handle GET requests in express.js. 
// It is used to define a route for handling GET requests. It takes two arguments: the first argument is the route path, and the second argument is a callback function that will be executed when the route is matched.
//creating an error in express.js. It is used to create an error object that can be passed to the next middleware function in the stack.


app.get("/about", function (req, res) {
    return next(new Error("This is an error")); // will display in console
})  

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something went wrong!'); // will display in frontend
  })

app.listen(3000)

