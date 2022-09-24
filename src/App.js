
import MovieList from './components/MovieList';
import Navigation from './components/Navigation';
import AddMovie from './components/AddMovie';
import {Routes, Route} from 'react-router-dom';


const App = () => {
	const movies=[
		{
			Title: 'Star Wars: Episode IV - A New Hope',
			Year: '1977',
			imdbID: 'tt0076759',
			Type: 'movie',
			Poster:
				'https://lumiere-a.akamaihd.net/v1/images/image_83011738.jpeg?region=0,0,540,810',
		},
		{
			Title: 'Star Wars: Episode V - The Empire Strikes Back',
			Year: '1980',
			imdbID: 'tt0080684',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		},
		{
			Title: 'Star Wars: Episode VI - Return of the Jedi',
			Year: '1983',
			imdbID: 'tt0086190',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
		},
	]
return (
<div className='row'>
	<Navigation/>
<Routes>
	<Route path='/addmovie' element={<AddMovie/>} />
	<Route path='/List' element={<MovieList movies={movies}/>} />
</Routes>	
</div>
)
}
export default App;
