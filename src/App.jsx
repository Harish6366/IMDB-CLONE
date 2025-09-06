import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'
import Use from './components/Use'

function App() {

  let [watchlist, setWatchList] = useState([])

  let handleAddtoWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)

  }

  let handleRemovefromWatchList = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    setWatchList(filteredWatchList)
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList))
    console.log(filteredWatchList)
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))

  }, [])


  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<>
            <Banner />  <Movies watchlist={watchlist} handleAddtoWatchList={handleAddtoWatchList} handleRemovefromWatchList={handleRemovefromWatchList} />
          </>} />

          <Route path='/Watchlist' element={<Watchlist watchlist={watchlist} setWatchList={setWatchList} handleRemovefromWatchList={handleRemovefromWatchList} />} />

        </Routes>


      </BrowserRouter>
      <Use />
    </>
  )
}

export default App
