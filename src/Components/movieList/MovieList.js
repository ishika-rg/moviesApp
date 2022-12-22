import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Card from "../card/Card.js";
import { useParams } from "react-router-dom";

const MovieList = (params) => {
  const handleFavouriteClick = params.handleFavouriteClick;

  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  // const [favourite, setFavourite] = useState([])
  // const handleFavouriteClick = (ele) => {

  //     const exist = favourite.find((item)=> item.id === ele.id)
  //     if (exist){
  //         setFavourite(favourite.map((item) => item.id === ele.id ?
  //         {...exist} : item ))
  //     }else{
  //         setFavourite([...favourite])
  //     }
  // }
  // console.log(favourite)

  // const handleFavouriteClick = (mov) => {

  //     const newFav = [...favourite, mov]
  //     setFavourite(newFav)

  // }
  // console.log(favourite)

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <>
      <div className="movieList">
        <div className="category">
          <div className="mark"></div>

          <h2>
            {(type ? type : "POPULAR").toUpperCase()}{" "}
            <i className="fa-solid fa-line-vertical"></i>{" "}
          </h2>
        </div>

        <div className="movieCards">
          {movieList.map((movie) => (
            <Card
              movie={movie}
              key={movie.id}
              handleFavouriteClick={handleFavouriteClick}
            />
          ))}
        </div>
      </div>

    </>
  );
};

export default MovieList;
