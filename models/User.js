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
        match: [/^([a-zA-Z0-9_\.-]+)@([\a-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/]
      },
         thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },],
      friends:[
        {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },],
      },
      {toJSON: {virtuals: true}} );

userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;