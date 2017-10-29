//import mongoose
var mongoose = require('mongoose');

//connect to mongo-db
mongoose.connect('mongodb://localhost/mongotest');
mongoose.connection.once('open', function(){
  console.log('Connection is successfull!');
}).on('error', function(error){
      console.log('Connection Test Failed!!', error);
});
