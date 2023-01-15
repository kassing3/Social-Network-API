const {Schema, model} = require('mongoose');
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
         createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => timestamp.toDateString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
    }
);


userSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

const User = model('user', userSchema);

module.exports = User;
