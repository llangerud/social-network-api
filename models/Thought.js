const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
      },
      // timestamps: true,
         //the user that created this thought
      username: {
        type: String,
        required: true
      },   
      
     //like a reply, an array of nested documents created with reactionSchema
      reactions: [reactionSchema],
    });

    thoughtSchema.virtual('reactionCount').get(function(){
      return this.reactions.length;
    })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;