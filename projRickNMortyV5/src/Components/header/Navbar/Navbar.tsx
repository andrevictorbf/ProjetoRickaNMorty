import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom';





export const NavbarWrapped = (): JSX.Element => {
    return (
        
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Link to='/'>
                    <Navbar.Brand >Rick and Morty </Navbar.Brand>
                    </Link>
                    <Nav className="d-flex">
                        <Nav.Link> <Link to='/personagens'>Personagens</Link> </Nav.Link>
                        <Nav.Link  ><Link to='/episodios'>Episódios</Link> </Nav.Link>
                        <Nav.Link><Link to='/localizacoes'>Localizações</Link></Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        
    )
}

