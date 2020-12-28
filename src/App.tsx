import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/index'
import Movies from './components/Movies'


const App: React.FC = () => {

  const [movies, setMovies] = useState([])
  const [tempMovies, setTempMovies] = useState([])

  return (
    <div className="App">
		  <Header movies= {movies} setMovies = {setTempMovies} />
      <Movies movies= {tempMovies} setMovies = {setMovies} setTempMovies={setTempMovies}/>
    </div>
  );
}

export default App;
