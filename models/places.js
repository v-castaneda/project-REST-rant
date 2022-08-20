const mongoose = require('mongoose')
let url = 'https://placekitten.com/300/300'

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true},  
  pic: {type: String, default: url}, 
  cuisines: { type: String, required: true},  
  city: { type: String, default: 'Anytown'}, 
  state: { type: String, default: 'USA'}, 
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)