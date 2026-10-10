const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
     postdata: String,
     user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
     data: {
        type: Data,
        default: Data.now
      }
})

module.exports = mongoose.model('user', postSchema);
