import {Badge, Button, Col, Container, Row } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Tutorial = () => {
    const navigate = useNavigate();

    const toLogin = () => {
      navigate('/login')
    }

    return <Container>
        <Row>
            <Col xs={3} />
                <Col xs={6}>
                    <h3>
                        Welcome to the <Badge bg="primary">Todo Management App!</Badge>
                    </h3>
                </Col>
            <Col xs={3} />
        </Row>
        <Row>
            <Col xs={3} />
            <Col xs={6}>
                <p>
                Follow these simple steps to get started:
                </p>
                <p>
                    1 Select a User: From the list, pick a user to log in as. This will allow you to view and manage your personal todo list.
                </p>
                <p>
                    Access Your Todos: Once logged in, you can view all of your tasks on the My Todo page.
                </p>

                <p>
                    Manage Todos: On the My Todo page, you can:

                </p>
                <p>
                    Create new todos to keep track of tasks.
                    Edit existing todos if you need to make changes.
                    Delete todos that are no longer needed.
                    View Summary: On the Summary page, you can see an overview of todos across all users, with totals for completed and pending tasks.
                </p>
                Enjoy staying organized with our app!

                <Button onClick={() => toLogin()}> GO {`>>`} </Button>
            </Col>
            <Col xs={3} />
        </Row>
    </Container>

}
export default Tutorial
