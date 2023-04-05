import { FilmIcon } from '@heroicons/react/24/outline';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Genre } from '../components/Genre';
import NavComp from '../components/Navbar';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { API_KEY, IMAGE_LINK, TEST_PROGRAM_ID } from "../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { VideoPlayerModal } from '../components/VideoPlayerModal';
import { DataContext } from '../context/MovieContext';
import { listGames, getGame } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { IMAGE_UNAVAILABLE_PLACEHOLDER } from "../constants";



// 
export default function ShowInfo() {
  const {isTvShow}=useContext(DataContext);
   const [modalShow, setModalShow] = useState(false);
  const[movieInfo,setMovieInfo]=useState();
  const[movieCast,setMovieCast]=useState([])
  const[movieVideoId,setMovieVideoId]=useState("")
  const [gameEvents, setGameEvents] = useState([]);
const params=useParams()
const {id:movieId}=params
const navigate = useNavigate();


async function fetchMovieDetails() {
  console.log("In loadGame():");
  console.log(movieId);
  // const apiData = await API.graphql({ query: getGame, variables: {input: { id }}});
  const apiData = await API.graphql(graphqlOperation(getGame, { id: movieId }));
  console.log("loadGames apiData and its nested data:");
  console.log(apiData);
  const gameFromAPI = apiData.data.getGame;
  //const resData = await response.json();
  console.log(gameFromAPI);
  setMovieInfo(gameFromAPI);
  //return gameFromAPI;
}

async function fetchGameEvents() {
  console.log("In loadGame():");
  console.log(movieId);
  // const apiData = await API.graphql({ query: getGame, variables: {input: { id }}});
  const apiData = await API.graphql(graphqlOperation(getGame, { id: movieId }));
  console.log("loadGames apiData and its nested data:");
  console.log(apiData);
  const gameFromAPI = apiData.data.getGame;
  //const resData = await response.json();
  console.log(gameFromAPI);
  //return gameFromAPI;
}

/* const fetchMovieDetails=async()=>{
const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
setMovieInfo(data)
} */

const fetchMovieCast=async()=>{
  const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  setMovieCast(data.cast)
}
  

const fetchMovieVideoId=async()=>{
const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
setMovieVideoId(data?.results[0]?.key)
}

/* componentDidMount() {
    console.log('componentDidMount');
    let gameId  = this.props.match.params.gameId;
    console.log('gameId: ' + gameId);
    this.fetchGame(gameId)
    const subscription = API.graphql(
      graphqlOperation(onCreateGameEventCustom, {
        gameId: gameId
      })
    ).subscribe({
        next: (gameEventData) => {
            console.log('GOT NEW DATA FOR GAME EVENT');
            console.log(gameEventData);
            let tempEvents = this.state.gameEvents;
            
            tempEvents.unshift(gameEventData.value.data.onCreateGameEvent);
            this.setState({gameEvents: tempEvents});
            this.setState({lastGameEvent: gameEventData.value.data.onCreateGameEvent});
            if(gameEventData.value.data.onCreateGameEvent.game.gameStatus?.sections != null && gameEventData.value.data.onCreateGameEvent.game.gameStatus?.sections.length > 0) {
                console.log('STATS string is: ');
                console.log(gameEventData.value.data.onCreateGameEvent.game.gameStatus.sections[0].stats);
                let tempStats = JSON.parse(gameEventData.value.data.onCreateGameEvent.game.gameStatus.sections[0].stats);
                console.log('STATS ARE: ');
                console.log(tempStats);
                this.setState({lastGameStats: tempStats});
            }
            
        }
    });


    this.setState({subscription: subscription});
  }
   */
useEffect(()=>{
  fetchMovieDetails();
  fetchMovieCast();
  fetchMovieVideoId()
},[movieId])


  return (
    <>
      <NavComp />
      <Container>
        <div className="wrapper mt-4">
          <div id="movie-info" className=" d-flex gap-5">
            <img
              style={{
                borderRadius: 5,
                boxShadow: "rgb(46 255 14 / 10%) -1px -1px 57px 1px",
                width: 350,
                height: 500,
                objectFit: "cover",
              }}
              src={IMAGE_UNAVAILABLE_PLACEHOLDER} // {`${IMAGE_LINK}${movieInfo?.backdrop_path}`}
              alt="movie thumnail"
            />
            <div className="mt-5">
              <h3 style={{ fontSize: 33, color: "white" }}>
                {movieInfo?.title ||
                  movieInfo?.name ||
                  `${movieInfo?.home.name} vs ${movieInfo?.away.name} Game`}
              </h3>
              <div className="d-flex gap-2 mt-3">
                <Genre />
                <Genre />
                <Genre />
              </div>
              <p style={{ color: "#a5a5a5", marginTop: 15, lineHeight: 1.8 }}>
                {`Status: ${movieInfo?.gameStatus.status}`}
              </p>
              <p style={{ color: "#a5a5a5", marginTop: 15, lineHeight: 1.8 }}>
                {`${movieInfo?.home.name} ${movieInfo?.gameStatus.homeScore} - ${movieInfo?.gameStatus.awayScore} ${movieInfo?.away.name}`}
              </p>
              <p style={{ color: "#a5a5a5", fontWeight: "bold" }}>
                Start time: {movieInfo?.plannedKickoffTime}
              </p>

              <button
                onClick={() => navigate(`../livegame/${movieInfo.programId || TEST_PROGRAM_ID}`)} // or movieInfo.programId
                style={{
                  background: "#00CE79",
                  border: "none",
                  color: "black",
                  fontSize: 18,
                  fontWeight: 500,
                  marginTop: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
                className="btn btn-primary"
              >
                <FilmIcon style={{ width: 20, height: 20 }} />
                Join Game
              </button>
              <button
                onClick={() => setModalShow(true)}
                style={{
                  background: "#00CE79",
                  border: "none",
                  color: "black",
                  fontSize: 18,
                  fontWeight: 500,
                  marginTop: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
                className="btn btn-primary"
              >
                <FilmIcon style={{ width: 20, height: 20 }} />
                Watch Game Content
              </button>
            </div>
          </div>
          <div className="mt-5">
            <h2 style={{ color: "white" }}>Cast</h2>
            <div className="d-flex flex-wrap gap-5 mt-5">
              {movieCast?.map((cast) => (
                <div
                  key={cast.id}
                  style={{ display: "grid", placeItems: "center" }}
                >
                  <LazyLoadImage
                    width={100}
                    height={100}
                    style={{
                      objectFit: "cover",
                      borderRadius: "100%",
                    }}
                    src={`${IMAGE_LINK}${cast.profile_path}`}
                    alt="user"
                  />
                  <p
                    className="m-0 mt-2 mb-1 "
                    style={{ color: "white", textAlign: "center" }}
                  >
                    {cast.name}
                  </p>
                  <p style={{ color: "white", textAlign: "center" }}>
                    {cast.character}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <VideoPlayerModal
        videoid={movieVideoId && movieVideoId}
        title={movieInfo?.title}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
