Title:
  CRUD testing using mocha

Prerequisites:
  Set up mocha as we have done with Lesson: 4

Changes made:
  * We will update the test case in test_CRUD.js to add a case to insert dummy data to the MongoDB.
  * Since the call save() is asynchronous, we will use the default promise method 'then()' to confirm if the data is entered in the DB.
  * done() is a call back method used to tell mocha that the case is completed.
  * Run the test command to test the changes.
    npm run test
Tools used:
  Editor: Atom

Authors
  Govind Kannan
