const express = require('express');
const app = express();
const path = require('path');

const userModel = require('./usermodel.js');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.send('Hello World');
})

app.get('/create', async function(req, res){
    let createdUser = await userModel.create({
        name : 'lam dam',
        email : 'lamsam@example.com',
        password : 'psaord123'
    })

     res.send(createdUser);

//  this is a synchronous operation, so we need to wait for it to complete before sending a response
    console.log('User created successfully');
})

// for updating a user, we can use the findOneAndUpdate method of the user model
app.get('/update', async function(req, res){
    let updatedUser = await userModel.findOneAndUpdate(
        { email: 'john.doe@example.com' },
        { name: 'Jane Doe' },
        { returnDocument: 'after' }
    )
    res.send(updatedUser);
})

// for read the user, we can use the find method of the user model
app.get('/read', async function(req, res){
    let user = await userModel.find( );
    res.send(user);
});

//  find gives us an array of all the users in the database, so we can use the find method to get all the users and send them back to the client
// findOne gives us a single user, so we can use the findOne method to get a single user and send it back to the client

// for deleting a user, we can use the findOneAndDelete method of the user model
app.get('/delete', async function(req, res){
    let deletedUser = await userModel.findOneAndDelete({ email: 'john.doe@example.com' });
    res.send(deletedUser);
})

app.listen(3000);