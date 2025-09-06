import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useGetMovieById from "../hooks/useGetMovieById";
import { clearMovieDetails } from "../store/slices/movie.slice";

export default function MovieDetails() {
  const dispatcher = useDispatch();
  const { movieId } = useParams();
  const [loading, error, getMovieById] = useGetMovieById();
  const { data = {} } = useSelector((store) => store.movie);

  useEffect(() => {
    if (movieId) {
      getMovieById(movieId);
    }
    return () => {
      dispatcher(clearMovieDetails());
    };
  }, [movieId]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-gray-800 rounded-md w-[50%] h-[50%] flex">
        <img src={data["movieDetails"]?.Poster} />
        <div className="p-5">
          <h1 className="text-white text-4xl font-bold">
            {data["movieDetails"]?.Title}
          </h1>
        </div>
      </div>
    </div>
  );
}
