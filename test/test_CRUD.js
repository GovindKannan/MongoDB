//require mocha -- not required
const mocha=require('mocha');
const assert=require('assert');
const Model1 = require('../models/model1');
/**
  Mocha test suite follows the jasmine framework
  We first describe the test and add test cases with in our describe block
  */
describe('CRUD Test to Mongo', function(){
  //All the tests are defined here
  it('Create Record into Database', function(done){
    var model1JSON=new Model1({
      param1: 'This is a Test record created by Mocha',
      param2: 1
    });

    //Save the data to MongoDB using the save method.
    model1JSON.save().then(function(){
      assert(model1JSON.isNew===false);
    });//this is an asynchronous process to save the data to MongoDB

    done();
  });


});
