import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap"





export const NavbarWrapped = (): JSX.Element => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">Rick and Morty </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Personagens</Nav.Link>
                        <Nav.Link href="#features">Episodios</Nav.Link>
                        <Nav.Link href="#pricing">Localizacoes</Nav.Link>
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

