const {Schema} = require ('mongoose');


const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
      // default: () => new Types.ObjectId(),
      },
        reactionBody: {
        type: String,
        required: true,
        max_length: 280
      },
      //formatting in createdAt, no getter
      createdAt: {
        type: String,
        default: Date,
      },
      //the user that created this reaction
      username: {
        type: String,
        required: true
      },
      },
  );

module.exports = reactionSchema;