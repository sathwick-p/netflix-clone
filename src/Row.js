import React, { useState, useEffect, lazy } from "react";
import axios from "./axios";
import "./Row.css";
const baseurl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // leaving [] as blank will run only once the row loads
  }, [fetchUrl]);
  //   console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* Several Row Posters */}

        {movies.map((movie) => (
          <img
            src={`${baseurl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt=""
            className={`row__poster ${
              isLargeRow ? "row__poster__large" : "row__poster"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
