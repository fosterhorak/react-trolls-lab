const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trollSchema = new Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true}, 
  age: { type: Number, required: true, default: 0 }, 
  temperament: { type: String, required: true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Troll', trollSchema);