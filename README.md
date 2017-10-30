Title:
  Drop Collections

Prerequisites:
  * Set up Mocha
  * Set up Mongo
  * Create test js files in mocha to connect and create records in mongodb

Overview:
  In our previous tutorials, we have created a MongoDB (mongotest). In out Mocha test, we have connected to the database and performed a unit test to insert a dummy record into the DB. However each time we run the 'npm run test' command, a new record is inserted into the collection. You may validate this by checking the DB using any tool like Robo 3T.

  In this tutorial, we will update the mocha script to add a new hook which will drop the test collection (Drop table) before every test that is executed from mocha.

Changes made:
  * In connection.js, we will add a new beforeEach hook to drop test collection before each test case is executed in mocha.

Tools used:
  Editor: Atom

Authors
  Govind Kannan
