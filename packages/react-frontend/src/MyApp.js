// MyApp.js
import React, {useState, useEffect} from 'react';
import Table from './Table';
import Form from './Form';

function MyApp() {
  const [characters, setCharacters] = useState([]);
  
  function removeOneCharacter(index) {
    const characterToDelete = characters[index];
  
    if (!characterToDelete || !characterToDelete.id) {
      console.log(index);
      console.error(characterToDelete);
      return;
    }
  
    fetch(`http://localhost:8000/users/${characterToDelete.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 204) {
          // If the server responds with a 204 status, the user has been successfully deleted.
          // Update the state by filtering out the deleted character.
          const updatedCharacters = characters.filter((_, i) => i !== index);
          setCharacters(updatedCharacters);
        } else if (response.status === 404) {
          // Handle the case where the user was not found.
          console.error('User not found.');
        } else {
          // Handle other possible errors here.
          console.error('Failed to delete user.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  
  function updateList(person) { 
    postUser(person)
      .then((response) => response.json()) // Parse the response JSON.
      .then((data) => {
        const generatedId = data.newUser.id; // Get the actual id generated on the server.
        person.id = generatedId; // Set the id in the client data.
        setCharacters([...characters, person]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchUsers() {
    const promise = fetch("http://localhost:8000/users");
    return promise;
  }

  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((json) => setCharacters(json["users_list"]))
      .catch((error) => { console.log(error); });
  }, [] );

  function postUser(person) {
    const promise = fetch("Http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });

    return promise;
  }
  
  return (
    <div className="container">
      <Table characterData={characters} 
        removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  )
}

export default MyApp;