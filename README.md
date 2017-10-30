Title:
  Update Record

Prerequisites:
  * Set up Mocha
  * Set up Mongo
  * insert some records to mocha db

Overview:
  In this tutorial we will create some unit tests to update records using mongoose.

  * obj.update()- Here we create a new object with criteria and have the record updated in database.
  * ClassName.update() - Here we use the class/Model template to find and update record(s) from the database. Criteria is passed as argument.
  * ClassName.findOneAndUpdate() - Here we use the class template to find a record and update a particular record from database.  

  We will also try and use some update operators. Update operators are just some tools we can use to update some parameters in our record. Some examples are provided below.
   * increment operator - $inc -- increments the records by param passed (even negative values are allowed).
   * TODO: Try out the remaining operators after researching!

Changes made:
  * In test CRUD.js, we have added a new test to update the record.
Tools used:
  Editor: Atom

Authors
  Govind Kannan
