Title:
  Drop Collections

Prerequisites:
  * Set up Mocha
  * Set up Mongo
  * insert some records to mocha db

Overview:
  Now that we have inserted some records in Mocha DB, lets see how we can delete records from the database. The below three methods are common to perform the operation.

  * obj.remove- Here we create a new object with criteria and have the record removed from database.
  * ClassName.remove() - Here we use the class/Model template to find and remove record from the database. Criteria is passed as argument.
  * ClassName.findOneAndRemove() - Here we use the class template to find a record and remove a particular record from database.  

Changes made:
  * In test CRUD.js, we have added a new test to delete the record.
Tools used:
  Editor: Atom

Authors
  Govind Kannan
