//require mongoose and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define model schema
const Model1Schema = new Schema({
  param1: String,
  param2: Number
});

//define a model
const model1_Record = mongoose.model('model1_record', Model1Schema);

module.exports= model1_Record;
