import { Container, Card, Button } from 'react-bootstrap'

export default function Index() {
    return (<>
        <main className="flex-grow-1 py-4">
            <Container>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Добро пожаловать!</Card.Title>
                        <Card.Text>
                            Это пример простого дизайна с использованием React Bootstrap.
                            Здесь может быть ваш основной контент.
                        </Card.Text>
                        <Button variant="primary">Узнать больше</Button>
                    </Card.Body>
                </Card>

                <div className="row">
                    <div className="col-md-4 mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Карточка 1</Card.Title>
                                <Card.Text>
                                    Содержимое первой карточки.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Карточка 2</Card.Title>
                                <Card.Text>
                                    Содержимое второй карточки.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Карточка 3</Card.Title>
                                <Card.Text>
                                    Содержимое третьей карточки.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </main>
    </>)
}