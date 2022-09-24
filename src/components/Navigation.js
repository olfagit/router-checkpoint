import {Container, Navbar, Nav,Form , Button}from 'react-bootstrap';
import {Link } from 'react-router-dom';


function Navigation(){
    return(  
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to='/addmovie'>Add Movie</Link>
          <Link to='/List'>List of Movies</Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"/>
            <div>
              
          <Button variant="outline-success">Search</Button>
          </div>
        </Form>
      </Container>
    </Navbar>
)
}
export default Navigation;