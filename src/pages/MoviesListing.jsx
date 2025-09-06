import React, { useEffect, useState } from "react";
import GridShow from "../components/GridsShow/GridShow";
import { useSelector, useDispatch } from "react-redux";
import { saveMovie } from "../store/slices/movie.slice";
import PromotionSlider from "../components/PromotionSlider/PromotionSlider";
import useMovieSearch from "../hooks/useMovieSearch";

export default function MoviesListing() {
  const dispatcher = useDispatch();
  const [banner, setBanner] = useState([]);
  const { data = {} } = useSelector((store) => store.movie);
  const ironmanData = localStorage.getItem("ironman");
  const fastData = localStorage.getItem("fast");
  const [loading, error, searchMovie] = useMovieSearch();
  useEffect(() => {
    if (!fastData) {
      searchMovie("fast", "fast");
    }
    if (!ironmanData) {
      searchMovie("ironman", "ironman");
    }
    fetch("http://localhost:5173/promotion.json")
      .then((response) => response.json())
      .then((res) => setBanner(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (ironmanData) {
      dispatcher(saveMovie({ key: "ironman", value: JSON.parse(ironmanData) }));
    }
    if (fastData) {
      dispatcher(
        saveMovie({ key: "fastandfurious", value: JSON.parse(fastData) })
      );
    }
  }, [ironmanData, fastData]);

  return (
    <div className="w-full h-[100%]">
      {/* Banner section */}
      <section className="relative w-full mb-[50px]" id="banner_section">
        <PromotionSlider data={banner} />
      </section>
      {/* Movies listing Grids */}
      <section className="mb-[100px]" id="movie-swiper-grids">
        <h2 className="text-3xl text-white mx-10 mb-5">
          Fast & Furious Collections
        </h2>
        <GridShow data={data["fastandfurious"]} />
      </section>
      <section className="mb-[100px]" id="movie-swiper-grids">
        <h2 className="text-3xl text-white mx-10 mb-5">Iron Man</h2>
        <GridShow data={data["ironman"]} />
      </section>
    </div>
  );
}
