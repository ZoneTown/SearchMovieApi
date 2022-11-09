import React, {useEffect, useState} from 'react';
import Movielist from './movielist';
import Searchmovie from './searchbar';
import './App.css';

// Calling Movies
/*const App = () => {
  const [movies,setMovie] = useState([
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    }, {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Year": "1980",
      "imdbID": "tt0080684",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    }, {
      "Title": "Star Wars: Episode VI - Return of the Jedi",
      "Year": "1983",
      "imdbID": "tt0086190",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }
  ])*/

  // Calling OMDBi api
  const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchmovie, setSearchmovie] = useState('')

    const Requestmovie = async()=>{
      const url=`https://www.omdbapi.com/?s=${searchmovie}&apikey=cb6941a`;
      const response = await fetch(url);
      const data = await response.json();
      if(data.Search){
        setMovies(data.Search);
      }
    }

    useEffect(() =>{
      Requestmovie(searchmovie);
    },[searchmovie]);

    return(
      <div>
        <div className="moviesearch">
          <Searchmovie searchmovie={searchmovie} setSearchmovie={setSearchmovie}/>
        </div>

        <div className="App">
          <Movielist movies={movies}/>
        </div>
      </div>
      
    );
  }

export default App;
