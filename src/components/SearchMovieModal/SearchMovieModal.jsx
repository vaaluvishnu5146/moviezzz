"use client";

import { Modal, ModalBody, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

export function SearchMovieModal({ open, toggle }) {
  const [movie, setMovie] = useState([]);
  const searchString = useRef(null);

  useEffect(() => {
    setMovie(JSON.parse(localStorage.getItem("fast")));
  }, []);

  function handleSearch(e) {
    if (e.charCode === 0 && e.code === "Enter") {
      console.log("Search movie", searchString.current.value);
    }
  }

  return (
    <>
      <Modal size="7xl" show={open} onClose={() => toggle(false)}>
        <ModalBody className="h-screen bg-gray-800">
          <div className="h-screen rounded-2xl">
            <div id="search-bar" className="mb-5">
              <TextInput
                ref={searchString}
                placeholder="Search movie...."
                onKeyDown={handleSearch}
              />
            </div>
            <div className="grid grid-cols-6 gap-3">
              {movie.map((_m, index) => {
                return <MovieCard key={`${_m.Title}`} data={_m} />;
              })}
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
