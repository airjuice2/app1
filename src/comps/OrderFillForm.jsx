import React from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import useStore from '../state/store';

export default function OrderFillForm() {

    const { ordersData } = useStore()

    console.log(ordersData);


    const now = new Date()
    const today = new Date()
    const yesterday = new Date(now)
    yesterday.setDate(yesterday.getDate() - 1)

    const formatDateTime = (date) => {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')

        return `${year}-${month}-${day}T${hours}:${minutes}`
    }

    const timeValue = `${String(yesterday.getHours()).padStart(2, '0')}:${String(yesterday.getMinutes()).padStart(2, '0')}`

    return (
        <>
            {
                ordersData.map((e, i) => {
                    return (
                        <Card className="two-column-form-card mb-3" key={i}>
                            <Card.Header>
                                <Card.Title as="div">Заказ № {e[0]?.orderid}</Card.Title>
                                <div className="header-actions">
                                    <button
                                        className="delete-btn"
                                        aria-label="Удалить"
                                    >
                                        Удалить {e[0]?.orderid}
                                    </button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                {e.map((ee, ii) => {
                                    return (
                                        <Card className="mt-3" key={ii}>
                                            <Card.Header>{ee.print_type} (слой №{ee.layerid}) мастер смены - Сова Е.А.</Card.Header>
                                            <Card.Body>
                                                <Form>
                                                    <Row>
                                                        <Col md={6}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Пуск машины</Form.Label>
                                                                <Form.Control
                                                                    type="datetime-local"
                                                                    defaultValue={formatDateTime(today)}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={6}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Остановка машины</Form.Label>
                                                                <Form.Control
                                                                    type="datetime-local"
                                                                    defaultValue={formatDateTime(yesterday)}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Заказчик</Form.Label>
                                                                <Form.Control type="text" placeholder="Заказчик" value={ee.company} onChange={e => { }} />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Материал</Form.Label>
                                                                <Form.Control type="text" placeholder="Материал" value={ee.material} onChange={e => { }} />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Ширина</Form.Label>
                                                                <Form.Control type="text" placeholder="Ширина" value={ee.width} onChange={e => { }} />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={6}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Выработано КГ</Form.Label>
                                                                <Form.Control
                                                                    type="number"
                                                                    value={0}
                                                                    onChange={e => {

                                                                    }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={6}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Выработано М</Form.Label>
                                                                <Form.Control
                                                                    type="number"
                                                                    value={0}
                                                                    onChange={e => {

                                                                    }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Отходы настройка норма</Form.Label>
                                                                <Form.Control type="number" placeholder="Отходы настройка норма" value={0} onChange={e => { }} />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Отходы настройка факт</Form.Label>
                                                                <Form.Control type="number" placeholder="Отходы настройка факт" value={0} onChange={e => { }} />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Отходы настройка отклонение</Form.Label>
                                                                <Form.Control type="number" placeholder="Отходы настройка отклонение" value={0} onChange={e => { }} />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Отходы технические норма</Form.Label>
                                                                <Form.Control type="number" placeholder="Отходы технические норма" value={0} onChange={e => { }} />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Отходы технические факт</Form.Label>
                                                                <Form.Control type="number" placeholder="Отходы технические факт" value={0} onChange={e => { }} />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Отходы технические отклонение</Form.Label>
                                                                <Form.Control type="number" placeholder="Отходы технические отклонение" value={0} onChange={e => { }} />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>

                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    )
                                })}
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>

    );
}