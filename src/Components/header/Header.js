import React from 'react'
import './Header.css'
import logo from './video.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header' >
        <div className='header-left'>
             
            {/* <Link to = '/'><img src = {logo} alt = "logo image" className = 'logo' /> </Link> */}
            <Link to = '/'><img className = 'logo' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' /></Link>
            <Link to  = '/movies/popular'> <span> Popular </span> </Link>
            <Link to  = '/movies/top_rated'> <span>Top Rated </span></Link>

            <Link to  = '/movies/upcoming'> <span> Upcoming </span> </Link>
            
        </div>

        <div className='header-right' >
            <h4>    Bookmarks </h4>
        </div>

        

        
    </div>
  )
}

export default Header