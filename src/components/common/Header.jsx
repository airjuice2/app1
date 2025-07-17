import { Link } from 'react-router'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/">Главная</Link>
                        <Link to="/reports">Отчеты</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}