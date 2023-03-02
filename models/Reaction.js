const {Schema} = require('mongoose');
const userSchema = require('./User');
const thoughtSchema = require('./Thought');

//Schema Settings
//create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

const thoughtSchema = new Schema(
    {
      reactionId: {
        type: ObjectId,
        default: new ObjectId
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