import React from "react";
import GenresList from "../Constants/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {GenresList.genere.map(
        (item, i) =>
          i <= 4 && (
            <div className=" px-8 md:px-16" key={i}>
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id} index_={i} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
