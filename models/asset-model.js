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

const assetSubField = new mongoose.Schema({
  _id:false,
  name: {
    type: String
  },
  description:{
      type: String,
  }
})
module.exports = mongoose.model('asset', asset)
module.exports.asset = assetSubField;
