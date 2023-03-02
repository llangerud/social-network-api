const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

//Schema Settings
//create a virtual called friendCount that retrieves the length of the user's friends array field on query

const UserSchema = new Schema(
    {
      username: {
        type: String,
        //unique
        required: true,
        //trimmed
      },
      email: {
        type: String,
        required: true,
        //unique
        //add Mongoose email validation
      },
      
     //array of _id values referencing the thought model
      thoughts: [thoughtSchema],
      //arry of _id values referencing the user model (self ref)
      friends:[UserSchema],
      },
  );




const User = model('user', userSchema);

module.exports = User;