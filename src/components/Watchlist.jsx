import React, { useEffect, useState } from 'react'
import genreids from '../utility/Genre'

function Watchlist({ watchlist, setWatchList,handleRemovefromWatchList }) {

  const [search, setSearch] = useState('')
  const [genrelist, setGenreList] = useState(['All Genres'])
  const [currGenre, setCurrentGenre] = useState('All Genres')

  let handleSearch = (e) => {
    setSearch(e.target.value)
  }
  let sortIncreasing = () => {
    let sortedIncreasing = [...watchlist].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList(sortedIncreasing);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = [...watchlist].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList(sortedDecreasing);
  };

  let sortPopularityIncreasing = () => {
    let sortedIncreasing = [...watchlist].sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    setWatchList(sortedIncreasing);
  };

  let sortPopularityDecreasing = () => {
    let sortedDecreasing = [...watchlist].sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    setWatchList(sortedDecreasing);
  };


  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp)
  }, [watchlist])
  let handlefilter = (genre) => {
    setCurrentGenre(genre)
  }


  return (
    <>

      <div className='flex justify-center  flex-wrap m-4 p-4'>
        {genrelist.map((genre) => {
          return <div onClick={() => handlefilter(genre)} className={currGenre == genre ? 'flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4 p-4' : 'flex justify-center items-center bg-gray-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4 p-4'}>{genre}</div>

        })}


      </div>

      <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} type="text"
          placeholder='Search Movies'
          className='h-12 w-72 border-2 border-black bg-gray-200 outline-none px-4 rounded-md' />
      </div>
      <div className='overflow-hidden border border-orange-200 m-8'>
        <table className='w-full text-center rounded'>
          <thead className='border-b-2'>
            <tr className="text-center">
              <th className="py-2">Name</th>

              {/* Ratings Column */}
              <th>
                <div className='flex items-center justify-center'>
                  <div onClick={sortIncreasing} className='p-2'>
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className='p-2'>Ratings</div>
                  <div onClick={sortDecreasing} className='p-2'>
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>

              {/* Popularity Column */}
              <th>
                <div className='flex items-center justify-center'>
                  <div onClick={sortPopularityIncreasing} className='p-2'>
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className='p-2'>Popularity</div>
                  <div onClick={sortPopularityDecreasing} className='p-2'>
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>

              <th className="py-2">Genre</th>
              {/* <th className="py-2">Action</th> */}
            </tr>
          </thead>



          <tbody>

            {watchlist.filter((movieObj) => {
              if (currGenre == 'All Genres') {
                return true
              } else {
                return genreids[movieObj.genre_ids[0]] == currGenre
              }
            })
              .filter((movieObj) => {
                return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
              }).map((movieObj) => (
                <tr key={movieObj.id} className='border-b-2 text-center'>
                  <td className='px-6 py-4 flex items-center'>
                    <img className='h-[8rem] w-[8rem] rounded-xl' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} />
                    <div className='mx-6'>{movieObj.title}</div>
                  </td>
                  <td className='py-4'>{movieObj.vote_average}</td>
                  <td className='py-4'>{movieObj.popularity}</td>
                  <td className='py-4'>{genreids[movieObj.genre_ids[0]]}</td>
                  <td onClick={ ()=>handleRemovefromWatchList(movieObj)} className='py-4 text-red-800 font-bold'>Delete</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>



    </>
  )
}

export default Watchlist;