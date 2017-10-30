//require mongoose and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define child schema
const PlayerSchema = new Schema({
  name: String,
  age: Number
});

//define parent schema and refer child schema
const TeamSchema = new Schema({
  name: String,
  team_id: Number,
  players:[PlayerSchema]
});

//define a model
const Team = mongoose.model('team', TeamSchema);
module.exports= Team;
