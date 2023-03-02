const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const reactionSchema = require('./Reaction');

//Schema Settings
//create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
        //trimmed
      },
      createdAt: {
        type: Date,
        
        //set default value to the current timestamp
        //use a getter method to format the timestamp on query
      },
      //the user that created this thought
      username: {
        type: String,
        required: true
      },
     //like a reply, an array of nested documents created with reactionSchema
      reactions: [reactionSchema],
      },
  );

const Thought = model('thought', thoughtSchema);

module.exports = Thought;