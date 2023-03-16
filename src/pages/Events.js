import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import { listGames } from "../graphql/queries";
import { API } from "aws-amplify";


import EventsList from '../components/EventsList';

function EventsPage() {
/*   const res = useLoaderData();
  console.log('useLoaderData output:');
  console.log(res); */
  const { games } = useLoaderData();
  console.log("EventsPage games:");
  console.log(games);

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={games}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

/* async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
} */

/* const [games, setGames] = useState([]);

useEffect(() => {
  fetchGames();
}, []); */

async function loadGames() {
  console.log('In loadGames():');
  const apiData = await API.graphql({ query: listGames });
  const notesFromAPI = apiData.data.listGames.items;
  //setGames(notesFromAPI);
  console.log('loadGames():');
  console.log(notesFromAPI);
  return notesFromAPI;
}

/* async function createGame(event) {
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
} */

export function loader() {
  console.log('In defer( games: loadedGames() ) pre-loadGames() exec');
  return defer({
    games: loadGames(),
  });
}
