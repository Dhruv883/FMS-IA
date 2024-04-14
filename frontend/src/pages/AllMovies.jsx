import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import "../styles/AllMoviesPage.css";
import axios from "axios";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8083/api/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.error("Error fetching all movies: ", error);
      });
  }, []);

  // Function to chunk the array into groups of a specified size
  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };
  
  const chunkedMovies = chunkArray(movies, 3);


  return (
    <div>
      <div>
      {/* Map over each group of movies and render a row */}
      {chunkedMovies.map((rowMovies, rowIndex) => (
        <div key={rowIndex} className="movieRow">
          {/* Map over each movie in the current row and render a MovieCard */}
          {rowMovies.map((movie) => (
             movie && <Cards key={movie.id} title={movie.title} poster={movie.poster}/>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default AllMovies;
