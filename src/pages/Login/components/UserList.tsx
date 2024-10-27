import {Button, Card, Col, Container, Row, Table} from "react-bootstrap";
import {ReactNode} from "react";


type UserListProps = {
    userList: any[]
    selectUser: (userId: number ) => void
}

function C(props: { children: ReactNode }) {
    return null;
}

const UserList = ({ userList, selectUser }: UserListProps ) => {
    return  <Container className="py-5">
        <h1 className="text-center mb-4">Select a User</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
            {userList.length && userList.map(user => (
                <Col key={user.id}>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>Email: {user.email}</Card.Text>
                            <Button variant="primary" onClick={() => selectUser(user.id)}>
                                Select User
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
}

export default UserList
