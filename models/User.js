const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: {regex: "/^([a-zA-Z0-9_\.-]+)@([\a-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/"}
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
     //array of _id values referencing the thought model - not currently set to _id values
      thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },],
      //arry of _id values referencing the user model (self ref)
      friends:[
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },],
      },
  );

userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
})


const User = model('user', userSchema);

module.exports = User;