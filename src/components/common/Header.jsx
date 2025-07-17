import { Link } from 'react-router-dom'
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar expand="lg" className="custom-header">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          MyApp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="nav-link">
              Главная
            </Nav.Link>

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="nav-link">
                Отчеты
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item
                  as={Link}
                  to="/reports/foreman"
                  className="dropdown-item"
                >
                  Мастер смены
                </Dropdown.Item>
                {/* <Dropdown.Item
                  as={Link}
                  to="/products/category2"
                  className="dropdown-item"
                >
                  Категория 2
                </Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item
                  as={Link}
                  to="/products/all"
                  className="dropdown-item"
                >
                  Все продукты
                </Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>

            {/* <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="nav-link">
                Аккаунт
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item
                  as={Link}
                  to="/account/profile"
                  className="dropdown-item"
                >
                  Профиль
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/account/settings"
                  className="dropdown-item"
                >
                  Настройки
                </Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item
                  as={Link}
                  to="/logout"
                  className="dropdown-item"
                >
                  Выйти
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}