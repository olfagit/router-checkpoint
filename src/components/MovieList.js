import React from 'react';
import MovieCard from './MovieCard';


const MovieList = ({movies}) => {
	return (
		<div style={{display:"flex" , justifyContent: "space-between" , margin:"30px"}}>
			{
      movies.map((movie, index) => (<MovieCard  movie={movie}/>))
      }
		</div>
	);
};

export default MovieList;