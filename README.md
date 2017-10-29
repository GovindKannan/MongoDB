Title:
  CRUD testing using mocha

Prerequisites:
  The promise that we had used 'then()' in our previous tutorial is depricated. As a result, we will be using ES6 promises.

  We will also create a hook to ensure that create connection in connection.js is executed before the test execution.

Changes made:
  * In connection.js, we will update mongoose.Promise to point to default ES6 promise.
  * In connection.js, we will add a hook 'before' and cut paste the connection code into it so that connections are made just before tests are executed.
  * We also added a call back method done, to be called after connection is made.

Tools used:
  Editor: Atom

Authors
  Govind Kannan
