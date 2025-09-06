import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveMovie } from "../store/slices/movie.slice";

/**
 * useMovieSearch will search the input from user and retrun sthe list of movies that matches the criteria
 * @returns [loading, error, searchMovie]
 */
export default function useGetMovieById() {
  const dispatcher = useDispatch();
  // WHether api is fetching data or not
  const [loading, setLoading] = useState(false);
  // Whether error in fetching data or not
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
    return () => {};
  }, [error]);

  function getMovieById(movieId = "") {
    setLoading(true);
    if (movieId) {
      fetch(`https://www.omdbapi.com/?apikey=2c7c92b&i=${movieId}`)
        .then((response) => response.json())
        .then((result) => {
          if (result.Error) {
            setError(result.Error);
          } else {
            localStorage.setItem("movieDetails", JSON.stringify(result));
            dispatcher(saveMovie({ key: "movieDetails", value: result }));
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }

  return [loading, error, getMovieById];
}
