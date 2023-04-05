import React, { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import { DataContextProvider } from "./context/MovieContext";
import { Loading } from "./components/Loading";
/* import ShowTvInfo from './helpers/ShowTvInfo';
import Search from './pages/Search'; */

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const ShowInfo = lazy(() => import("./pages/ShowInfo"));
const LiveGame = lazy(() => import("./pages/LiveGame"));


export default function App() {
  return (
    // TODO: Implement code splitting

    <>
      <DataContextProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            {/*  <Route path='/tv-series' element={<TvSeries/>}/>
  <Route path='/search' element={<Search/>}/> */}
            <Route path="/:id" element={<ShowInfo />} />
            <Route path="/livegame/:id" element={<LiveGame />} />
            {/* <Route path='/tv/:id' element={<ShowTvInfo/>}/> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </DataContextProvider>
    </>
  );
}
