import React from 'react'
import './Card.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'


const Card = (props) => {

    const movie = props.movie
    const handleFavouriteClick = props.handleFavouriteClick


    const [fav, setFav] = useState([])
    const add = (id) => {
        // if (!fav.includes(id)) setFav(fav.concat(id));
        // console.log(id);

        const newFav = [...fav, id]
        setFav(newFav)
        console.log("adding favourite item button")
        console.log(fav)




    }
    // console.log(fav)


    // {movie}

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            
        }, 1500);
    }, [])

  return (
    <>
    {
        loading ? 
        <div className = 'card'>
            <SkeletonTheme color = '#202020' highlightColor='#444'>
                <Skeleton height={300} width = {200} duration = {2} />
            </SkeletonTheme>
        </div> 
        :

       
            <div className = 'card'>
                <div className = 'card-img'> <img alt = 'card image' 
                src = {movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'} /> </div>

                <div className = "fav_icon" 
                // onClick={handleFavouriteClick}
                onClick = {() => add(movie)}
                ><i className="fa fa-heart" aria-hidden="true"></i></div>


        <Link to = {`/movie/${movie.id}`}>
                <div className = 'card-details'>
                    <div className = 'card-title'>{movie ? movie.original_title.slice(0, 30) : "" }</div>
                    <div className = 'card-info'>
                            {movie ? movie.release_date : ""}
                            <span className = "movie-ratings">
                                {movie ? movie.vote_average : ""}
                                <i className = "fas fa-star" />
                            </span>
                    </div>
                    {/* <div className = "card-description">{movie ? movie.overview.slice(0, 50)+"..." : "" }</div> */}

                </div>
            
        </Link>    
            
            </div>
       
    }

    </>
  )
}

export default Card