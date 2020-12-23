import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const API_KEY = 'cdf468f0'
const series = ['avengers', 'fast and furious', 'iron man', 'harry potter']

const Movies:React.FC = props => {
    
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const promises = series.map(series => {
            return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&y=2019&apikey=${API_KEY}&page=1`)
            .then(res => res.json())
        })
        
        Promise.all(promises).then((movies: any) => {
            setMovies(movies.map((movie: any) => movie.Search))
        })
    }, [])

    console.log(movies)

    return <>
        {movies.flat(2).map((movie: any) => {
            return <Movie 
                    key={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    image={movie.Poster}
                
                    />
        })
    }
    </>
}

export default Movies