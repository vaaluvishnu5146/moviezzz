import React from "react";

export default function MovieCard({ data = {} }) {
  return (
    <div className="relative h-full bg-gray-900 rounded-sm cursor-pointer transform transition-transform duration-300 hover:scale-102">
      <div
        className="relative"
        style={{
          backgroundImage: `url(${data.Poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "250px",
        }}
      >
        <div className="absolute bottom-0 w-full h-[100px] bg-linear-180 from-transparent to-gray-900 z-10"></div>
      </div>
      <div className="p-2">
        <p className="text-white ">{data?.Title?.slice(0, 20)}</p>
      </div>
    </div>
  );
}
