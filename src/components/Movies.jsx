import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';

function Movies({ handleAddtoWatchList, handleRemovefromWatchList, watchlist }) {
  let [movies, setMovies] = useState([]);
  let [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      return; // don't go below page 1
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/popular?api_key=41696016e39d4d59c1068854c0bbbd42&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch(function (err) {
        console.error('Error fetching data:', err);
      });
  }, [pageNo]);

  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around m-5 gap-8'>
        {movies.map((movieobj) => {
          return (
            <MovieCard
              key={movieobj.id}
              movieObj={movieobj}
              poster_path={movieobj.poster_path}
              name={movieobj.original_title}
              handleAddtoWatchList={handleAddtoWatchList}
              handleRemovefromWatchList={handleRemovefromWatchList}
              watchlist={watchlist}
            />
          );
        })}
      </div>

      <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
}

export default Movies;
