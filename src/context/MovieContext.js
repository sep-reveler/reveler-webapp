import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  FILTERED_MOVIES_WITH_GENRES,
  FILTERED_TV_SHOWS_WITH_GENRES,
  LATEST,
  MOVIE_GENRES,
  SEARCH_MOVIES,
  TRENDINGS,
  TV_GENRES,
  TV_SHOWS,
} from "../constants";
import { fetchData } from "../helpers/request";
import { listGames } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const [trendings, setTrendings] = useState([]);
  const [movies, setMovies] = useState([]);
  // const [tvShows, setTvShows] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  // const [tvGenres, setTVGenres] = useState([]);
  const [trendingTotalPages, setTrendingTotalPages] = useState(1);
  const [latestTotalPages, setLatestTotalPages] = useState(1);
  //const [tvTotalPages, setTvTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResultsTotalPages, setSearchResultsTotalPages] = useState();
  const [games, setGames] = useState();
  const [gamesTotalPages, setGamesTotalPages] = useState(1);

/*   const fetchTrendings = async () => {
    const { data: movies } = await fetchData(TRENDINGS(currentPage));
    setTrendings(movies.results);
    setTrendingTotalPages(movies.total_pages);
  }; */
  const fetchGames = async () => {
    /*   console.log('In loadGames():');
  const apiData = await API.graphql({ query: listGames });
  const notesFromAPI = apiData.data.listGames.items;
  //setGames(notesFromAPI);
  console.log('loadGames():');
  console.log(notesFromAPI);
  return notesFromAPI; */
    var today = new Date(2023, 3, 16);
    var todayString = today.toISOString().slice(0, 10);
    console.log(todayString);
    const games = await API.graphql(
      graphqlOperation(listGames, {
        filter: {
          plannedKickoffTime: {
            beginsWith: "2023-03-1", //todayString 02-08
          },
          /*           stageId: {
            eq: "sr:season:93741:1",
          }, */
        },
      })
    );
    console.log("GAMES ARE: ", games.data.listGames.items);
    setGames(games.data.listGames);
    //return games.data.listGames.items;
    /*   if (games.data.listGames.items.length > 0) {
    this.setState({ games: games.data.listGames.items });
  } */
  }
  const fetchTrendings = async () => {
    var today = new Date(2023, 3, 16);
    var todayString = today.toISOString().slice(0, 10);
    console.log(todayString);
    const games = await API.graphql(
      graphqlOperation(listGames, {
        filter: {
          plannedKickoffTime: {
            beginsWith: "2023-03-1", //todayString 02-08
          },
          /*           stageId: {
                eq: "sr:season:93741:1",
              }, */
        },
      })
    );
    console.log("fetchTrendings GAMES ARE: ", games.data.listGames.items);
    setGames(games.data.listGames.items);
    setMovies(games.data.listGames.items);
    setTrendings(games.data.listGames.items);
    setTrendingTotalPages(1);
    setLatestTotalPages(1);
  };
  const fetchGenres = async () => {
    const { data } = await fetchData(MOVIE_GENRES);
    setMovieGenres(data.genres);
  };

  const SearchMovies = async () => {
    if (!query) return;
    const { data } = await fetchData(SEARCH_MOVIES(currentPage, query));
    setMovieSearchResults(data.results);
    setSearchResultsTotalPages(data.total_pages);
    console.log("SearchMovies:");
    console.log(data);
  };

  useEffect(() => {
    fetchTrendings();
    // fetchLatest();
    // fetchGenres();
    // fetchGames();
/*     fetchTvShows();
    fetchTvGenres();
    SearchMovies(); */
  }, [currentPage]);

  const handleGenres = async (id) => {
    setMovieGenres(
      movieGenres.map((genre) =>
        genre.id === id
          ? { ...genre, active: !genre.active }
          : { ...genre, active: false }
      )
    );

    const { data } = await axios.get(
      FILTERED_MOVIES_WITH_GENRES(currentPage, id)
    );
    setMovies(data.results);
  };




  return (
    <DataContext.Provider
      value={{
        trendings,
        movies,
        // movieGenres,
        games,
        setGames,
        setGamesTotalPages,
        gamesTotalPages,
        /*  tvShows,
        tvGenres,
        handleGenres,
        handleTvGenres, */
        setMovies,
        trendingTotalPages,
        currentPage,
        setCurrentPage,
        setLatestTotalPages,
        latestTotalPages,
        /* tvTotalPages,
        searchResultsTotalPages,
        setQuery,
        SearchMovies,
        movieSearchResults,
        query, */
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
