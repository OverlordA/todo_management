import {Col, Container, Row } from "react-bootstrap";
import {useLoaderData, useNavigate } from "react-router-dom";
import {useUsersStore} from "../../store/user/user";
import React, {useEffect} from "react";
import {getUser} from "../../api/user";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import {getAuthUser, saveAuthUser} from "../../util/localStorage";

const Login = () => {
    const users = useLoaderData();
    const navigate = useNavigate()

    const { userList, selectedUser, updateUserList, loginUser, logoutUser} =
        useUsersStore();

    useEffect(() => {
        updateUserList(users as any[])
    }, [users])

    useEffect(() => {
        const user = getAuthUser();
        if(user){
            loginUser(user)
        }
    }, [])


    const logOut = () => {
        logoutUser();
        saveAuthUser(null)
        navigate('/login')
    }

   const selectUser = async (userId: number) => {
        const userDetail = await getUser(userId);
        if(userDetail){
            loginUser(userDetail)
            saveAuthUser(userDetail);
        }
    }

    return  <Container>
            <Row>
                <Col xs={3} />
                <Col xs={6} >
                    {!selectedUser  ?  <h3>Select user for Login </h3> :  <h3>Selected user:  </h3> }
                </Col>
                <Col xs={3} />
            </Row>
        <Row>
            <Col xs={3} />
            <Col xs={6}>
                {!selectedUser && <UserList userList={userList} selectUser={selectUser} /> }
                {selectedUser && <UserDetail logOut={logOut} />}
            </Col>
        </Row>
    </Container>
}

export default Login
