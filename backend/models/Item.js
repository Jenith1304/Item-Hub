const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  coverImage: String, 
  additionalImages: [String],
}, { timestamps: true });

module.exports = mongoose.model('Item', ItemSchema);
