const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
      unique: true,
      match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
