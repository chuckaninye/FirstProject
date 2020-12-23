import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import './styles.css'

const API_KEY = 'cdf468f0'
const series = ['avengers', 'star wars', 'iron man', 'harry potter']

const Movies:React.FC = props => {
    
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const promises = series.map(series => {
            return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&apikey=${API_KEY}&page=1`)
            .then(res => res.json())
        })
        
        Promise.all(promises).then((movies: any) => {
            setMovies(movies.map((movie: any) => movie.Search))
        })
    }, [])

    console.log(movies)

    return <div className="movies">
        {movies.flat(2).map((movie: any) => {
            return <Movie 
                    key={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    image={movie.Poster}
                
                    />
        })
    }
    </div>
}

export default Movies