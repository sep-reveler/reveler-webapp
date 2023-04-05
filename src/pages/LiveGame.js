import { FilmIcon } from '@heroicons/react/24/outline';
import React, { useContext, useEffect, useState } from 'react';
import { Nav, Tab, Col, Container, Row } from 'react-bootstrap';
import { Genre } from '../components/Genre';
import NavComp from '../components/Navbar';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { API_KEY, IMAGE_LINK } from '../constants';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { VideoPlayerModal } from '../components/VideoPlayerModal';
import { DataContext } from '../context/MovieContext';
import { listGames, getGame } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import  "./LiveGame.css";
import classes from "./LiveGame.module.css";
import gameImg from "./Miami-vs-texas-banner.gif";


import {
  IMAGE_UNAVAILABLE_PLACEHOLDER,
  TEST_PROGRAM_ID,
  LL_CLIENT_ID,
  TEST_ROOM_ID,
  TEST_ENDPOINT,
  TEST_ACCESS_TOKEN,
} from "../constants";
import LiveLike from "@livelike/engagementsdk";
import { wrapWc } from "wc-react";
//import config from "../config";

function JSONParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}

export const parseUserCustomData = (profile) =>
  JSONParse(profile.custom_data) || null;

export const updateLiveLikeUserProfile = (userProfile, nickname, custom_data) =>
  LiveLike.updateUserProfile({
    accessToken: userProfile.access_token,
    options: { nickname, custom_data: JSON.stringify(custom_data) },
  });

const LiveLikeWidgets = wrapWc("livelike-widgets");
const LiveLikeChat = wrapWc("livelike-chat");

// 
export default function LiveGame() {
    const [livelikeProfile, setLiveLikeProfile] = useState();
    const [userCustomData, setUserCustomData] = useState();

    useEffect(() => {
      LiveLike.init({
        clientId: LL_CLIENT_ID,
        TEST_ENDPOINT,
        accessToken: TEST_ACCESS_TOKEN,
      }).then((profile) => {
        setLiveLikeProfile(profile);
        const parsedCustomData = parseUserCustomData(profile);
        //parsedCustomData.isSignedIn=true;
        parsedCustomData && setUserCustomData(parsedCustomData);
      });

      // Ensure custom styles load last to overwrite any other styles
      document.body.insertAdjacentHTML(
        "beforeend",
        '<link rel="stylesheet" href="./CustomLiveLikeStyles.css">'
      );
    }, []);

  const { isTvShow } = useContext(DataContext);
  const [modalShow, setModalShow] = useState(false);
  const [movieInfo, setMovieInfo] = useState();
  const [movieCast, setMovieCast] = useState([]);
  const [movieVideoId, setMovieVideoId] = useState("");
  const [gameEvents, setGameEvents] = useState([]);
  const params = useParams();
  const { id: movieId } = params;

  async function fetchMovieDetails() {
    console.log("In loadGame():");
    console.log(movieId);
    // const apiData = await API.graphql({ query: getGame, variables: {input: { id }}});
    const apiData = await API.graphql(
      graphqlOperation(getGame, { id: movieId })
    );
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
    const apiData = await API.graphql(
      graphqlOperation(getGame, { id: movieId })
    );
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

  const fetchMovieCast = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    setMovieCast(data.cast);
  };

  const fetchMovieVideoId = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    );
    setMovieVideoId(data?.results[0]?.key);
  };

    useEffect(() => {
      fetchMovieDetails();
      fetchMovieCast();
      fetchMovieVideoId();
    }, [movieId]);
    return (
      livelikeProfile && (
        <>
          <NavComp />
          <Container className="app">
            {/* <div> */}
            <div flexbox="true" className="column one">
              <section className="video-container">
                <img className={classes.videoContainerImg} src={gameImg} />
              </section>
            </div>
            <div flexbox="true" className="column two">
              <div className="widget-container">
                <livelike-widgets
                  id="pop-up"
                  programid={TEST_PROGRAM_ID}
                ></livelike-widgets>
              </div>
              <Tab.Container id="left-tabs-example" defaultActiveKey="chat">
                <Col>
                  <Row sm={1}>
                    <Nav fill variant="tabs" className="flex-row">
                      <Nav.Item>
                        <Nav.Link eventKey="chat">Chat</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="timeline">Predictions</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="info">How-To-Play</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Row>
                  <Row sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="chat">
                        <LiveLikeChat
                          roomid={TEST_ROOM_ID}
                          hidecomposer={
                            !(livelikeProfile && livelikeProfile.access_token)
                          } //{!userCustomData.isSignedIn}
                          //avatarurl={userCustomData.avatarSrc}
                          messagesquotes
                          showavatar
                          messagemenus
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="timeline">
                        <LiveLikeWidgets
                          id="timeline"
                          mode="interactive-timeline"
                          className="timeline-widgets"
                          programid={TEST_PROGRAM_ID}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="info">
                        <div></div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Row>
                </Col>
              </Tab.Container>
            </div>
            {/* </div> */}
          </Container>
        </>
      )
    );
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


  return (
    <>
      <NavComp />
      <Container>
        <div className="wrapper mt-4"></div>
      </Container>
    </>
  );
}

/* function App() { //({ signOut }) {
  useEffect(() => {
    console.log('in useeffect');
    LiveLike.init({
      clientId: "LQumORAnK8bCIDlUZUFOXrfYa7t4JdO3yUGhNwEw",
      // "https://cf-blast.livelikecdn.com/api/v1/",
      accessToken: "yANADbvtf6xR-acprae3bcjJnyL1nZo-9E5NF0HdUyXYvx0FXro6zA",
    }).then((p) => {
      const widgetContainer = document.querySelector("livelike-widgets");
      const body = document.querySelector("body");
      const main = document.querySelector("main");
      const videoContainer = document.querySelector(".video-container");
      let divStyle = { "--chat-height": `calc(100% - ${nonChatHeight}px)` };
      console.log(divStyle);
      //const videoContainerHeight = entry.contentRect.height;
      console.log('videocontainer ');
      console.log(videoContainer);
      console.log('body ');
      //const bidyHeight = entry.contentRect.height;
      console.log(body);
      console.log('widgetcontainer');
      console.log(widgetContainer);
      console.log('livelike loaded');
    });
  }, []);
  //"e619e2f3-0f2b-4dc6-9481-0f32533b899b"
  return (
    <main
      className="app"
      style={{ "--chat-height": `calc(651px - ${nonChatHeight}px)` }}
    >
      <div className="column one">
        <section className="video-container">
          <img src={gameImg} alt="Game Image" />
        </section>
      </div>
      <div className="column two">
        <header className="main-header">
          <div className="logo">
            <img src={revlogo} />
          </div>
        </header>
        <div class="widget-container">
          <livelike-widgets id="pop-up"></livelike-widgets>
        </div>
        <ul className="nav nav-justified" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="timeline-tab"
              data-toggle="tab"
              href="#timeline"
              role="tab"
              aria-controls="timeline"
              aria-selected="true"
            >
              TIMELINE
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="timeline"
            role="tabpanel"
            aria-labelledby="timeline"
          >
     
            <livelike-widgets
              programid="e619e2f3-0f2b-4dc6-9481-0f32533b899b"
              mode="timeline"
              id="timeline"
              class="timeline-widgets"
            ></livelike-widgets>
          </div>
        </div>
      </div>
    </main>
  ); */