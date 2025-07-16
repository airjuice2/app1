import { Container, Row, Col } from 'react-bootstrap';
import OrderFindForm from './OrderFindForm';
import OrderFillForm from './OrderFillForm';

export default function App() {
  return (
    <>
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
    </>
  )
}