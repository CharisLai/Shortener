const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  URI: {
    type: String,
    required: ture
  },
  done: {
    type: Boolean
  }
})
module.exports = mongoose.model('Record', recordSchema)