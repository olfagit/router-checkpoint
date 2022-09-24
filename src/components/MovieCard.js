import {Button, Card}from 'react-bootstrap';


function MovieCard({movie}){
    return(
        <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text><p> The type of film is {movie.Type}</p>
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}
export default MovieCard;