import {Col, Container, Row, Table} from "react-bootstrap";
import {useLoaderData } from "react-router-dom";
import {useUsersStore} from "../../store/user/user";
import React, {useEffect} from "react";
import {getUser} from "../../api/user";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

const Login = () => {
    const users = useLoaderData();

    const { userList, selectedUser, updateUserList, loginUser} =
        useUsersStore();

    useEffect(() => {
        updateUserList(users as any[])
    }, [users])

   const selectUser = async (userId: number) => {
        const userDetail = await getUser(userId);
        if(userDetail){
            loginUser(userDetail)
        }
    }

    return  <Container>
            <Row>
                <Col xs={3} />
                <Col xs={6} >
                    <h3>Select user for Login </h3>
                </Col>
                <Col xs={3} />
            </Row>
        <Row>
            <Col xs={3} />
            <Col xs={6}>
                {!selectedUser && <UserList userList={userList} selectUser={selectUser} /> }
                {selectedUser && <UserDetail />}
            </Col>
        </Row>
    </Container>
}

export default Login
