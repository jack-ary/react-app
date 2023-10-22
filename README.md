# React app for CSC 307 - Kubiak

Helpful Note from the professor: Typically, you use npm run dev while coding your backend, and npm start will be used when you want to run your app in the production environment.

to test at this point: i suggest having two terminals open, one running the front end from the project root
```console
@yourComputer/react-app:~$ npm start
```

and the other to run the backend, remeber to refresh after updating the frontend
```console
@yourComputer/express-backend:~$ node backend.js
```

in order to test api calls,routes,execution,responses, etc. curl can be helpful. After starting up your backend you can call curl, for example: 
 ```console
@yourComputer/express-backend:~$ curl -X DELETE http://localhost:8000/users/ppp222
```
## Unit testing
Go to jest-unit-testing folder

```console
$ npm run -w . test
```

## Mongo DB notes

Start Mongo DB service
```console
$ brew services start mongodb-community
```
OR to run specific version
```console
$ brew services start mongodb-community@6.0
```

Open Mongo shell
```console
mongosh
```
Check what brew services are running
```console
brew services list
```
Stop the mongo service
```console
brew services stop mongodb-community@6.0
```

### DB Commands
Create a DB called users
```console
use users
```
Show current collections
```console
show collections
```
Insert an entry
```console
db.collection_name.insert({"name":"Charlie", "job":"Janitor"})
```
Show all entries in collection
```console
db.collection_name.find({})
```
Find entries with a given property - This can return multiple entries
```console
db.collection_name.find({ name: "Charlie" })
```
Find the first entry with a given property
```console
db.collection_name.fineOne({ name: "Charlie" })
```
Find entries with multiple given properties - similar to above
```console
db.collection_name.find({ name: "Charlie", job: "Janitor" })

db.collection_name.fineOne({ name: "Charlie", job: "Janitor" })
```
Delete operation - This behavior is becuase id must be of the correct type for deletion
```console
const ObjectId = ObjectId("id_to_delete");

db.collection_name.deleteOne({ _id: ObjectId })
```
Update a user
```console
// Define the filter (query) to find the user you want to update
const filter = { _id: ObjectId("653556e5250a64f0b70a6129") }; // Replace with the actual ObjectId of the user

// Define the update with the new data you want to set
const update = {
  $set: {
    name: "NewName", // New name value
    job: "NewJob",   // New job value
    // Add more fields to update here if needed
  }
};

// Use updateOne to update the user
db.users_list.updateOne(filter, update, function(err, result) {
    if (err) {
        print("Error while updating user: " + err);
    } else {
        print("User updated successfully");
    }
});
```
Create a new collection
```console
db.createCollection("mynewcollection")
```
