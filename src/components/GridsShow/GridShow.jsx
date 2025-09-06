// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";

export default ({ data = [] }) => {
  return (
    <div className="relative">
      <div className="absolute w-[25%] h-full bg-linear-90 from-gray-900 to-transparent z-10"></div>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        {data.map((_mov, index) => (
          <SwiperSlide key={`${_mov.imdbID}-${index}`}>
            <Link to={`/moviedetails/${_mov.imdbID}`}>
              <MovieCard data={_mov} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute right-0 top-0 w-[25%] h-full bg-linear-90 from-transparent to-gray-900 z-10"></div>
    </div>
  );
};
