import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  Header from './Components/header/Header.js'
import Home from './pages/home/Home.js'
import MovieList from './Components/movieList/MovieList';
import Movie from './pages/movieDetail/Movie.js'
import Bookmark from './pages/boookmarks/Bookmark.js'
import { useState } from 'react';
import Card from './Components/card/Card.js'


function App() {


  const [favourite, setFavourite] = useState([])

  const handleFavouriteClick = (mov) => {

    const newFav = [...favourite, mov]
    setFavourite(newFav)

}
console.log(favourite)

 
  return (
    <div className="App">

      <Router>


        <Header />


        <Routes>
          <Route index element = {<Home />}></Route>
          <Route path = 'movie/:id' element = { <Movie /> }></Route>
          <Route path = 'movies/:type' element = { <MovieList handleFavouriteClick = {handleFavouriteClick} /> }></Route>
          <Route path = '/*' element = { <h1> Oops! Page Not Found ! </h1>}></Route>


          <Route path = 'bookmarks' element = { <Bookmark favourite = {favourite} /> } > </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
