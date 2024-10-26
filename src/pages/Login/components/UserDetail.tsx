import {useUsersStore} from "../../../store/user/user";
import {Button, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


const UserDetail = () => {

    const { selectedUser} =
        useUsersStore();
    return <Container>
        <Row>
            { JSON.stringify(selectedUser) }
        </Row>
        <Row>
           <Button> Logout </Button>
        </Row>
        <Row>
            <Link to={`/my-todo/${selectedUser.id}`} >My Todo list </Link>
            <Link to={`/summary/${selectedUser.id}`} >Summary </Link>
        </Row>
    </Container>
}
export default UserDetail
