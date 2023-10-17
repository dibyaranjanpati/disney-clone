import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import GlobalApi from "./GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  });

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVidios.then((resp) => {
      // console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const screenWidht = window.innerWidth;

  const sliderRight = (element) => {
    element.scrollLeft += screenWidht - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidht - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[50px] absolute
        mx-8 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[50px] absolute
        mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4
        scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, i) => (
          <img
            key={i}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in"
            alt="img"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
