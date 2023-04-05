import { Link, useSubmit } from 'react-router-dom';

import classes from './EventItem.module.css';

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.gameImg} alt={event.name} />
      <h1>{event.name}</h1>
      <time>{event.plannedKickoffTime}</time>
      <p>{event.desc}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
/* id: ID!
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
  gameImg: String */