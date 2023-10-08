// backend.js
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const findUserByName = (name) => { 
    return users['users_list']
        .filter( (user) => user['name'] === name); 
}

const findUserById = (id) =>
    users['users_list']
        .find( (user) => user['id'] === id);
    
app.get('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
    if (result === undefined) {
        res.status(404).send('Resource not found.');
    } else {
        res.send(result);
    }
});

app.get('/users', (req, res) => {
    const name = req.query.name;
    if (name != undefined){
        let result = findUserByName(name);
        result = {users_list: result};
        res.send(result);
    }
    else{
        res.send(users);
    }
});

function generateRandomId(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomId += charset.charAt(randomIndex);
    }
    return randomId;
  }
  
  const addUser = (user) => {
    const generatedId = generateRandomId(6);
    user['id'] = generatedId;
    users['users_list'].push(user);
    return generatedId;
  }
  
  app.post('/users', (req, res) => {
    const userToAdd = req.body;
    let userId = addUser(userToAdd);
    res.status(201).send({ id: userId });
  });

const deleteUser = (req, res) => {
    const id = req.params.id;
    const idx = users["users_list"].findIndex((user) => user['id'] === id);
    if (idx === -1) {
        res.status(404).send("User not found.");
    } else {
        users["users_list"].splice(idx, 1);
        res.status(204).send(); // Sending a 204 status indicates success without any content.
    }
}

app.delete('/users/:id', deleteUser);

app.get('/users', (req, res) => {
    const name = req.query.name;
    const job = req.query.job;
    let filt_users;
    if (name != undefined){
        let result = findUserByName(name);
        filt_users = {users_list: result};
    }else{
        filt_users = users;
    }
    if (job!=undefined){
        let result = findUserByJob(filt_users,job);
        filt_users = {users_list: result};
    }
    res.send(filt_users);
}); 

const users = { 
    users_list : [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: 'Janitor',
       },
       {
          id : 'abc123', 
          name: 'Mac',
          job: 'Bouncer',
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: 'Professor',
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: 'Aspring actress',
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: 'Bartender',
       },
       {
        "id": "qwe123",
        "job": "Zookeeper",
        "name": "Cindy"
       },
    ]
 }