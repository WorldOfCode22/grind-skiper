const mongoose = require('mongoose');

const asset = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description:{
      type: String,
      required: true
  }
})

module.exports = mongoose.model('asset', asset)
module.exports.asset = asset;
