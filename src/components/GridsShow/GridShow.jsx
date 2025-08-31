// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";

export default ({ data = [] }) => {
  return (
    <div className="relative">
      <div className="absolute w-[250px] h-full bg-linear-90 from-gray-900 to-transparent z-10"></div>
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((_mov, index) => (
          <SwiperSlide key={`${_mov.imdbID}-${index}`}>
            <Link to={`/moviedetails/${_mov.imdbID}`}>
              <MovieCard data={_mov} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute right-0 top-0 w-[250px] h-full bg-linear-90 from-transparent to-gray-900 z-10"></div>
    </div>
  );
};
