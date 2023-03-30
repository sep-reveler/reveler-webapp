import { Suspense, useState, useEffect } from "react";
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import { listGames } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";


import EventsList from '../components/EventsList';

function EventsPage() {
  const [loadedGames, setLoadedGames] = useState([]);
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
/*   console.log('In loadGames():');
  const apiData = await API.graphql({ query: listGames });
  const notesFromAPI = apiData.data.listGames.items;
  //setGames(notesFromAPI);
  console.log('loadGames():');
  console.log(notesFromAPI);
  return notesFromAPI; */
  var today = new Date(2023, 1, 2);
  var todayString = today.toISOString().slice(0, 10);
  console.log(todayString);
  const games = await API.graphql(
    graphqlOperation(listGames, {
      filter: {
        plannedKickoffTime: {
          beginsWith: "2023-03-16", //todayString 02-08
        },
        /*           stageId: {
            eq: "sr:season:93741:1",
          }, */
      },
    })
  );
  console.log("GAMES ARE: ", games.data.listGames.items);
  return games.data.listGames.items;
/*   if (games.data.listGames.items.length > 0) {
    this.setState({ games: games.data.listGames.items });
  } */
}


export function loader() {
  console.log('In defer( games: loadedGames() ) pre-loadGames() exec');
  return defer({
    games: loadGames(),
  });
}
