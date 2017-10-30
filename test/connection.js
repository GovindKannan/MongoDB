//import mongoose
var mongoose = require('mongoose');

//ES6 promises
mongoose.Promise=global.Promise;

//Connect to DB before the test runs
before(function(done){
  //connect to mongo-db
  mongoose.connect('mongodb://localhost/mongotest');
  done();
  mongoose.connection.once('open', function(){
    console.log('Connection is successfull!');
  }).on('error', function(error){
        console.log('Connection Test Failed!!', error);
  });
});

//drop the collections to clean the test db before every test case.
beforeEach(function(){
  //Drop the collections
  mongoose.connection.collections.model1_records.drop(function(){
    done();
  });
});
