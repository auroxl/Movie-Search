import { useEffect, useState } from 'react';

import SearchIcon from './search.svg';
import MovieCard from './components/MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=6f690162';

const movie1 = {
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MzcwNTE5OV5BMl5BanBnXkFtZTcwMTIxNzQ0MQ@@._V1_SX300.jpg",
  "Title": "TMNT",
  "Type": "movie",
  "Year": "2007",
  "imdbID": "tt0453556"
}

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(()  => {
    searchMovies('tmnt');
  }, []);
  return(
    <div className=' bg-gray-900 min-h-screen'>
      <h1 className=' text-center text-3xl py-3 pt-9 text-blue-600 font-medium'>Find A Movie</h1>

      <div className='bg-gray-800 text-white rounded-lg px-6 py-4 mx-8 mt-6 shadow flex
       justify-between lg:mx-40'>
        <input 
          className=' bg-gray-800 text-white rounded-lg px-3 w-11/12 mr-2'
          placeholder="Search For Movies"
          value={searchTerm}
          onChange={ (e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={ () => searchMovies(searchTerm)}
        />
      </div>

      {
        movies.length > 0
          ? (
            <div className='mt-10 mx-8 justify-center lg:flex gap-10 flex-wrap'>
              {movies.map((movie) =>(
                <MovieCard movie={movie}/>
              ))}
            </div>
          ) : (
            <div className=' bg-gray-800 rounded-lg w-96 p-6 m-4 text-center shadow'>
              <h2>No movies found</h2>
            </div>
          )
      }
      
    </div>
  )
}

export default App;
