import React, { useState } from "react";
import search from "../../assets/search.png";
import { SearchMovieModal } from "../SearchMovieModal/SearchMovieModal";

export default function Appbar() {
  const [open, setOpen] = useState(false);

  function toggle(flag) {
    setOpen(flag);
  }

  return (
    <div className="absolute w-full h-[60px] bg-transparent z-10 p-5 flex justify-between">
      <div>Logo</div>
      <div>
        <img width={25} height={25} src={search} onClick={() => toggle(true)} />
      </div>
      <SearchMovieModal open={open} toggle={toggle} />
    </div>
  );
}
