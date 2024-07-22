import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom';





export const NavbarWrapped = (): JSX.Element => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand >Rick and Morty </Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link> <Link to='/personagens'>Personagens</Link> </Nav.Link>
                        <Nav.Link  ><Link to='/episodios'>Episódios</Link> </Nav.Link>
                        <Nav.Link><Link to='/localizacoes'>Localizações</Link></Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Pesquisar"
                            className="me-3"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Pesquisar</Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

