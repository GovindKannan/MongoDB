Title:
  Update Record

Prerequisites:
  * Set up Mocha
  * Set up Mongo

Overview:
  Mongo is not a relational database. However sometimes we need to relate two or more records which are functionally dependent on each other.

  The conventional and easy way is to add the related document as an array of objects with in the document itself. This will eliminate the need for creating a separate record and linking it to the parent record
  * Example Team document will have a array of players with in the team JSON instead of having a separate collection on players and linking to Team collection.

  Note that the array objects will have a separate schema which is reffered in our parent collection schema.
  * record.collectionName.push({param:val, param:val});  to add additional values
  * regular update script to save the data back to db after adding value.
  * record.collectionName.pull is used to remove data from child collection.

Changes made:
  * Create a new model team, and add players as array of objects as relational data.
  * Create a new test suite test_team.js to add script to create a new record team which has players as array of objects.
Tools used:
  Editor: Atom

Authors
  Govind Kannan
