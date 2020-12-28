import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { isPropertySignature } from 'typescript'
import Movie from './Movie'
import './styles.css'


const API_KEY = 'cdf468f0'
const series = ['avengers', 'star wars', 'iron man', 'harry potter']

type Props = {
    movies: any
    setMovies: any
    setTempMovies: any
}

const Movies:React.FC<Props> = props => {
    useEffect(() => {
        const promises = series.map(series => {
            return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&apikey=${API_KEY}&page=1`)
            .then(res => res.json())
        })
        
        Promise.all(promises).then((movies: any) => {
           const updatedMovies: any = movies.map((movie: any) => movie.Search).flat(2).map((movie: any) => ({
               title: movie.Title,
               year: movie.Year,
               image: movie.Poster,
               imdb: movie.imdbID
           }))

           props.setMovies(updatedMovies)
           props.setTempMovies(updatedMovies)
        })

    }, [])

    if(props.movies.length === 0){
        return <div className="loader">
        <CircularProgress />
        </div>
    }
   
     return <div className="movies">
         {props.movies.map((movie: any) => {
             return <Movie 
                     key={movie.imdbID}
                     title={movie.title}
                     year={movie.year}
                     image={movie.image}
                
                     />
         })
     }
     </div>
}

export default Movies