

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemovefromWatchList,
  watchlist, // ✅ Correct prop name
}) {
  function doesContain(movieObj) {
    if (!watchlist || !Array.isArray(watchlist)) return false;

    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className='relative h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300ms flex flex-col justify-end items-center'
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})` }}
    >
      {
        doesContain(movieObj) ? (
          <div
            onClick={() => { handleRemovefromWatchList(movieObj); }}
            className='absolute top-2 right-2 text-xl bg-gray-400 p-2 rounded-xl'
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => { handleAddtoWatchList(movieObj); }}
            className='absolute top-2 right-2 text-xl bg-gray-400 p-2 rounded-xl'
          >
            &#128525;
          </div>
        )
      }

      <div className='text-white text-l w-full p-2 text-center bg-gray-900/60'>
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
