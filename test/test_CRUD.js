//require mocha -- not required
const mocha=require('mocha');
const assert=require('assert');
const Model1 = require('../models/model1');
/**
  Mocha test suite follows the jasmine framework
  We first describe the test and add test cases with in our describe block
  */
describe('CRUD Test to Mongo', function(){
  var model1JSON;
  //All the tests are defined here
  it('Create Record into Database', function(done){
    model1JSON=new Model1({
      param1: 'This is a Test record created by Mocha',
      param2: 1
    });

    //Save the data to MongoDB using the save method.
    model1JSON.save().then(function(){
      assert(model1JSON.isNew===false);//returns true only if the record is not existing in DB

    });//this is an asynchronous process to save the data to MongoDB
    done();
  });

  it('Search and Read the record from database', function(done){
    //Search for records
    Model1.find().then(function(result){//searches and returns all as no criteria is provided
      console.log("--------------------------");
      assert(result.param2===1);
    });
    done();
  });

  it('Search using ID', function(done){
    //Search for records
    Model1.findOne({_id:model1JSON._id}).then(function(result){
      console.log(result.param1);
      console.log("--------------------------");
      assert(result._id===model1JSON._id);
    });
    done();
  });

});
