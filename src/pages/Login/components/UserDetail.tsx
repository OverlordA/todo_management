import {useUsersStore} from "../../../store/user/user";
import {Button, Card, Container, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";


const UserDetail = ({ logOut }: { logOut: () => void}) => {

    const { selectedUser} =
        useUsersStore();


    return  <Container className="py-5">
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>{selectedUser.name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Email:</strong> {selectedUser.email}</ListGroup.Item>
                    <ListGroup.Item><strong>Phone:</strong> {selectedUser.phone}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>

        <div className="mb-4">
            <h5>Quick Links</h5>
            <ListGroup>
                <ListGroup.Item>
                    <Link to={`/my-todo/${selectedUser.id}`} >My Todo List</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to={`/summary/${selectedUser.id}`}>Summary</Link>
                </ListGroup.Item>
            </ListGroup>
        </div>

        <Button variant="secondary" onClick={() => logOut()}>Logout</Button>
    </Container>
}
export default UserDetail
