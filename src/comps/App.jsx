import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import OrderFindForm from './~OrderFindForm'
import OrderFillForm from './~OrderFillForm'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <nav>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>
            <Link to="/contact">Контакты</Link>
          </nav>
        </Container>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />  {/* 404 страница */}
      </Routes>

        <Container>
          <Row>
            <Col>
              <OrderFindForm />
            </Col>
          </Row>
        </Container>

        <div style={{
          height: '1px',
          backgroundColor: '#dee2e6',
          margin: '2rem 0'
        }} />

        <Container>
          <Row>
            <Col>
              <OrderFillForm />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  )
}