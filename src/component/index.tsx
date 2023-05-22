// import React, { FC, useEffect } from "react";
// import axios from "axios";
// interface MoviesProps{
//     api: string;
// }
// const Movies: FC<MoviesProps> = ({api}) => {const fectchMovie = {
//     axios.get(api);
//     useEffect(fectchMovie,[])

//     return <div></div>;

// }};
// export default Movies;

import axios, { AxiosResponse } from "axios";
import React, { FC, useEffect, useState } from "react";
import { Movies } from "../models/movies";
interface MoviesProps {
  api: string;
}

const MoviesComponent: FC<MoviesProps> = ({ api }) => {
  const [movies, setMovies] = useState<Movies[]>([]);

  const handleFetchMoviesSuccess = (response: AxiosResponse<Movies[]>) => {
    setMovies(response.data);
  };

  const fetchMovie = () => {
    // promise
    axios.get(api).then(handleFetchMoviesSuccess);
  };

  useEffect(fetchMovie, []);

  return (
    <div>
      {movies.map((movie: Movies) => {
        return (
          <div className="movie">
            <h2>{movie.name}</h2>
            <img src={movie.image} width={300} alt="" />
            <h5>{movie.actorName}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesComponent;