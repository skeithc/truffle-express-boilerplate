const mongoose = require('mongoose');

const { Schema } = mongoose;

const tokenSchema = new Schema({
  tokenId: String,
  metadata: {
    name: String,
    description: String,
    tokenId: String,
    image: String,
    external_url: String,
    animation_url: String,
    attributes: [{
      trait_type: String,
      value: String,
    }],
  },
});

tokenSchema.index({
  tokenId: 1,
});

module.exports = mongoose.model('Token', tokenSchema);
