const assert = require('assert');
const mongoose=require('mongoose');
const Team = require('../models/team');

//creating test suite
describe('Test My Team', function(){

//add hooks here

//add test cases here
it('Create a new Team with players', function(done){
  var teamIndia = new Team({
    name: 'India',
    team_id: 99,
    players:[
      {name: 'Sachin', age:35},
      {name:'Saurav', age:37},
      {name:'Sehwag', age:33},
      {name:'Dhoni', age:25}
    ]
  });

  teamIndia.save().then(function(){
    Team.findOne({name:'India'}).then(function(record){
      assert(record.players.length===4);
    });
  });
  done();
});



});
