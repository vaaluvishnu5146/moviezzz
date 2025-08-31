import React, { useEffect, useState } from "react";
import lostinspace from "../assets/lostinspace.jpg";
import { Button } from "flowbite-react";
import GridShow from "../components/GridsShow/GridShow";
import { SearchMovieModal } from "../components/SearchMovieModal/SearchMovieModal";

export default function MoviesListing() {
  const [movies, setMovies] = useState([]);
  const [ironManmovies, setIronManMovies] = useState([]);
  const ironmanData = localStorage.getItem("ironman");
  const fastData = localStorage.getItem("fast");
  useEffect(() => {
    if (!fastData) {
      fetch(`https://www.omdbapi.com/?apikey=2c7c92b&page=1&s=fast&type=movie`)
        .then((response) => response.json())
        .then((res) => {
          localStorage.setItem("fast", JSON.stringify(res.Search));
          setMovies(res.Search);
        })
        .catch((err) => console.log(err));
    }
    if (!ironmanData) {
      fetch(
        `https://www.omdbapi.com/?apikey=2c7c92b&page=1&s=iron man&type=movie`
      )
        .then((response) => response.json())
        .then((res) => {
          localStorage.setItem("ironman", JSON.stringify(res.Search));
          setIronManMovies(res.Search);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    console.log("=========>", ironmanData, fastData);
    if (ironmanData) {
      setIronManMovies(JSON.parse(ironmanData));
    }
    if (fastData) {
      setMovies(JSON.parse(fastData));
    }
  }, [ironmanData, fastData]);

  return (
    <div className="w-full h-[100%]">
      {/* Banner section */}
      <section className="relative w-full mb-[50px]" id="banner_section">
        <div
          style={{
            backgroundImage: `url(${lostinspace})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
          }}
          alt="banner image"
        ></div>
        <div className="absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-black/49"></div>
        <div className="w-full h-auto px-[50px] absolute top-[40%]">
          <div className="w-[50%]">
            <h1 className="text-white font-bold text-4xl tracking-[10px] mb-2">
              LOST IN SPACE
            </h1>
            <p className="text-white font-light mb-5">
              After crash landing into a Alien planet, robinsons family fights
              all the odds to survive and escape.
            </p>
            <div className="flex gap-x-5">
              <Button className="bg-red-600 rounded-3xl">Watch Now</Button>
              <Button className="bg-gray-700 rounded-3xl">
                Add to watch list
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Movies listing Grids */}
      <section className="mb-[100px]" id="movie-swiper-grids">
        <h2 className="text-3xl text-white mx-10 mb-5">
          Fast & Furious Collections
        </h2>
        <GridShow data={movies} />
      </section>
      <section className="mb-[100px]" id="movie-swiper-grids">
        <h2 className="text-3xl text-white mx-10 mb-5">Iron Man</h2>
        <GridShow data={ironManmovies} />
      </section>
    </div>
  );
}
