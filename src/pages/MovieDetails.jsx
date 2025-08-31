import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    // fetch(`https://www.omdbapi.com/?apikey=2c7c92b&i=${movieId}`)
    //   .then((response) => response.json())
    //   .then((result) => setMovie(result))
    //   .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-gray-800 rounded-md w-[50%] h-[50%] flex">
        <img src={movie.Poster} />
        <div className="p-5">
          <h1 className="text-white text-4xl font-bold">{movie.Title}</h1>
        </div>
      </div>
    </div>
  );
}
