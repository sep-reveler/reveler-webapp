import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listGames } from "./graphql/queries";
import {
  createGame as createGameMutation,
  deleteGame as deleteGameMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  async function fetchGames() {
    const apiData = await API.graphql({ query: listGames });
    const notesFromAPI = apiData.data.listGames.items;
    setGames(notesFromAPI);
  }

  async function createGame(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("desc"),
    };
    await API.graphql({
      query: createGameMutation,
      variables: { input: data },
    });
    fetchGames();
    event.target.reset();
  }

  async function deleteGame({ id }) {
    const newNotes = games.filter((note) => note.id !== id);
    setGames(newNotes);
    await API.graphql({
      query: deleteGameMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createGame}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            <Button variation="link" onClick={() => deleteGame(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
