const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect(`mongodb://localhost:27017/mydatabase` );

// Define a schema for the user model
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
})

// Create a model for the user schema
module.exports = mongoose.model('User', userSchema);
