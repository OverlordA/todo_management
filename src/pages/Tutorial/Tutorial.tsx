import {Badge, Button, Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";

const Tutorial = () => {
    const navigate = useNavigate();

    const toLogin = () => {
      navigate('/login')
    }
    return    <Container className="py-5">
        <div className="text-center">
            <h1 className="display-4">Welcome to the Todo Management App!</h1>
            <p className="lead">Follow these simple steps to get started:</p>
        </div>

        <Card className="my-4">
            <Card.Body>
                <Card.Title>1. Select a User</Card.Title>
                <Card.Text>
                    From the list, pick a user to log in as. This will allow you to view and manage your personal todo list.
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className="my-4">
            <Card.Body>
                <Card.Title>2. Access Your Todos</Card.Title>
                <Card.Text>
                    Once logged in, you can view all of your tasks on the <strong>My Todo</strong> page.
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className="my-4">
            <Card.Body>
                <Card.Title>3. Manage Todos</Card.Title>
                <Card.Text>On the <strong>My Todo</strong> page, you can:</Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item>Create new todos to keep track of tasks.</ListGroup.Item>
                    <ListGroup.Item>Edit existing todos if you need to make changes.</ListGroup.Item>
                    <ListGroup.Item>Delete todos that are no longer needed.</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>

        <Card className="my-4">
            <Card.Body>
                <Card.Title>4. View Summary</Card.Title>
                <Card.Text>
                    On the <strong>Summary</strong> page, you can see an overview of todos across all users, with totals for completed and pending tasks.
                </Card.Text>
            </Card.Body>
        </Card>

        <div className="text-center my-4">
            <Button variant="primary" size="lg" onClick={() => toLogin()} >Get Started</Button>
        </div>

        <footer className="text-center mt-5">
            <p className="text-muted">Enjoy staying organized with our app!</p>
        </footer>
    </Container>
}
export default Tutorial
