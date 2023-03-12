import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Barra() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src="https://w7.pngwing.com/pngs/362/74/png-transparent-pokemon-go-pokemon-red-and-blue-pokemon-crystal-computer-icons-pokemon-go-blue-angle-text.png" alt="logo" style={{height:'40px'}}/> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='d-flex justify-content-end'>
          <Nav>
            <NavLink 
                 className={({ isActive}) => (isActive ? "viewActiva" : "view")}
                 to="/">
                 Home
            </NavLink>
             
            <NavLink 
                 className={({ isActive}) => (isActive ? "viewActiva" : "view")}
                 to="/personajes">
                 Pokemones
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra;



