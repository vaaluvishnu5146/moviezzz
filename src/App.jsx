import { Route, Routes } from "react-router-dom";
import MoviesListing from "./pages/MoviesListing";
import MovieDetails from "./pages/MovieDetails";
import Appbar from "./components/Appbar/Appbar";

function App() {
  return (
    <>
      <Appbar />
      <Routes>
        <Route path="/" Component={MoviesListing} />
        <Route path="/moviedetails/:movieId" Component={MovieDetails} />
      </Routes>
    </>
  );
}

export default App;
