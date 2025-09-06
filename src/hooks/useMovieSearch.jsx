import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveMovie } from "../store/slices/movie.slice";

/**
 * useMovieSearch will search the input from user and retrun sthe list of movies that matches the criteria
 * @returns [loading, error, searchMovie]
 */
export default function useMovieSearch() {
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

  function searchMovie(searchParam = "", keyToStore = "") {
    setLoading(true);
    if (searchParam) {
      fetch(
        `https://www.omdbapi.com/?apikey=2c7c92b&page=1&s=${searchParam}&type=movie`
      )
        .then((response) => response.json())
        .then((res) => {
          if (res.Error) {
            setError(res.Error);
          } else {
            localStorage.setItem(keyToStore, JSON.stringify(res.Search));
            dispatcher(saveMovie({ key: keyToStore, value: res.Search }));
          }
        })
        .catch((err) => setError(err))
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return [loading, error, searchMovie];
}
