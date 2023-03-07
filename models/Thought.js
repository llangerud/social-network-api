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
      username: {
        type: String,
        required: true
      },   
      reactions: [reactionSchema],
      //not using a getter, formatting here instead
      createdAt: {
        type: String,
        default: Date
        },
     
      },
      
      
    {toJSON: {virtuals: true}});

    thoughtSchema.virtual('reactionCount').get(function(){
      return this.reactions.length;
    });

    //   thoughtSchema.virtual('formattedDate').get (function (){
    //   return this.createdAt.toString();
    // })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;  

 