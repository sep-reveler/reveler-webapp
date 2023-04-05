// import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

import classes from './EventsList.module.css';

function EventsList({events}) {
  // const events = useLoaderData();

  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={`/events/${event.id}`}>
              <img
                src={
                  "https://resources.premierleague.com/photos/premierleague/photo/2022/02/15/99008ef3-508b-4465-8c91-a2a6a43222ce/1370772003.jpg?width=500&height=333"
                }
                alt={event.name}
              />
              <div className={classes.content}>
                <h2>{event.name}</h2>
                <time>{event.plannedKickoffTime}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;

/* type Game @model @auth(rules: [{allow: public}]) {
  id: ID!
  stage: String
  stageId: ID!
  plannedKickoffTime: AWSDateTime!
  venue: String
  home: String
  away: String
  gameStatus: String
  events: [String]
  stats: AWSJSON
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime!
  programId: String
  desc: String
  name: String
  league: String
  gameImg: String
} */