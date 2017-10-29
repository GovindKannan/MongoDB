# MongoDB

#Lesson 1 Initial Setup
  # Install NPM.
  # Add Mongoose DB.

# Lesson 2 Connection Test
  # Create test directory
  # Create connection.js to test connection to MongoDB
  # Connection String: mongodb://localhost/mongotest
    -- mongotest database will be created if it does not exist.
  # test the connectivity by running
    -- node test/connection.js

# Lesson 3 Collections & Models
  # Collections are like tables in RDBMS.
  # Collections can have records which corresponds to rows in RDBMS.
  # We can associate schema to define structure of record (JSON).
  # Models represent records in collection.
  # We will create a model and record in this tutorial. (Refer model1.js).

# Lesson 4 Mocha Testing framework
  # Mocha helps us in testing our application.
  # We will use mocha to perform CRUD operation on MongoDB in our later tutorials.

  # Use NPM to install Mocha
    npm install mocha --save

  # Created test_Crud.js (with a dummy test for now)
    # Created a test suite ('describe')
    # Created a test ('it' with dummy test)
  # Updated Package.json to perform mocha test
  # The test js file created should be directly with in test directory -- check why?
