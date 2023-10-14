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

