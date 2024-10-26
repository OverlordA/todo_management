import {useEffect} from "react";
import {useUsersStore} from "./store/user";
import {useLoaderData} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {Col, Container, Row} from "react-bootstrap";



const Landing = () => {

    const users = useLoaderData();

    const { userList, updateUserList} =
        useUsersStore();

    useEffect(() => {
        updateUserList(users as any[])
    }, [users])

    return   <Container>
        <Row>
            <Col xs={3} />
                <Col xs={6}>
                    <Card.Title>Welcome to the Todo Management App!</Card.Title>
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
            </Col>
            <Col xs={3} />
        </Row>
        <Row>
            <Col>
                {userList?.length && userList.map(user => {
                    return <div key={user.name}>{user.name}</div>
                })  }
            </Col>
        </Row>
    </Container>

}
export default Landing
