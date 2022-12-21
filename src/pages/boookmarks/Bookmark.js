import React from 'react'
import './Bookmark.css'
import Card from '../../Components/card/Card'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'



const Bookmark = ({favourite}) => { 


  console.log(favourite.length)

  const [items, setItems] = useState(favourite)
  console.log(items)

  // const [visible, setVisible] = useState(true);
  // const removeElement = (movie) => {
  //   setVisible((prev) => !prev);
  //   console.log('delete buttokn')
  // };

  // const [dis, setDis] = useState('')
  const removeElement= (id) => {
    const newItems = items.filter((ele) => ele.id !== id)
    setItems(newItems)
  }


  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //     setTimeout(() => {
  //         setLoading(false)
          
  //     }, 1500);
  // }, [])


  return (
    <div className  = 'bookmark_items'>

        <h1>Saved Items</h1>
        <div className = "fav-list">
            {items.length === 0  && (
                <div className = "list_empty">
                    <h1> Your wishlist is currently empty !</h1>
                </div>
            )}

        {items.map((movie) => (

        // <Card movie = {movie} key = {movie.id} />

        
         
          // <div className = 'card'>
          //     <SkeletonTheme color = '#202020' highlightColor='#444'>
          //         <Skeleton height={300} width = {200} duration = {2} />
          //     </SkeletonTheme>
          // </div> 
        
  
         
              <div className = 'card' >
                  <div className = 'card-img'> <img alt = 'card image' 
                  src = {movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'} /> </div>
  
                  <div className = "fav_icon">
                      <i className="fa fa-trash" aria-hidden="true" 
                       onClick = {() => removeElement(movie.id)}
                      
                  ></i></div>
  
  
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
  
                  </div>
              
          </Link>    
              
              </div>
         
      
  
      

        ))
        }


            
        </div>


      

    </div>
  )
}

export default Bookmark