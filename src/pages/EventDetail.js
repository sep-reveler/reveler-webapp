import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';
import { listGames, getGame } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";


import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

function EventDetailPage() {
  // const { game, games } = useRouteLoaderData('event-detail');
  const { game } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={game}>
          {(loadedGame) => <EventItem event={loadedGame} />}
        </Await>
      </Suspense>
{/*       <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={games}>
          {(loadedGames) => <EventsList events={loadedGames} />}
        </Await>
      </Suspense> */}
    </>
  );
}

export default EventDetailPage;

async function loadGames() {
  console.log("In loadGames():");
  const apiData = await API.graphql({ query: listGames });
  const notesFromAPI = apiData.data.listGames.items;
  //setGames(notesFromAPI);
  console.log("loadGames():");
  console.log(notesFromAPI);
  return notesFromAPI;
}

async function loadGame(id) {
  console.log("In loadGame():");
  console.log(id);
  // const apiData = await API.graphql({ query: getGame, variables: {input: { id }}});
  const apiData = await API.graphql(
    graphqlOperation(getGame, { id: id })
  );
  console.log('loadGames apiData and its nested data:');
  console.log(apiData);
  const gameFromAPI = apiData.data.getGame;
    //const resData = await response.json();
  console.log(gameFromAPI);
  return gameFromAPI;
}

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

export async function loader({ request, params }) {
  const id = params.eventId;
  console.log('In EventDetails loader fn');
  return defer({
    game: loadGame(id),
    //games: await loadGames(),
  });
}

export async function action({ params, request }) {
  console.log('in EventDetails action fn');
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete event.' },
      {
        status: 500,
      }
    );
  }
  return redirect('/events');
}
