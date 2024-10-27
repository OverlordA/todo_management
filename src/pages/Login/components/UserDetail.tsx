import {useUsersStore} from "../../../store/user/user";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


const UserDetail = ({ logOut }: { logOut: () => void}) => {

    const { selectedUser} =
        useUsersStore();
    return <Container>
        <Row>
            <Col xs={1}>
                { selectedUser.id }
            </Col>
            <Col xs={3}>
                { selectedUser.name }
            </Col>
            <Col xs={4}>
                { selectedUser.email }
            </Col>
            <Col xs={4}>
                { selectedUser.phone }
            </Col>
        </Row>
        <Row>
            <Col xs={4}>
                <Button onClick={() => logOut()}> Logout </Button>
            </Col>
        </Row>
        <Row>
            <Link to={`/my-todo/${selectedUser.id}`} >My Todo list </Link>
            <Link to={`/summary/${selectedUser.id}`} >Summary </Link>
        </Row>
    </Container>
}
export default UserDetail
