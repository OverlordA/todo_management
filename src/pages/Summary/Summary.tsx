import {Container, Table} from "react-bootstrap";
import {useSummaryStore} from "../../store/summary/summary";
import {useLoaderData} from "react-router-dom";
import {useEffect} from "react";


const Summary = () => {

    const {users, todos } = useLoaderData() as {users: any[], todos: any[]};
    const { usersStats, updateUserStats, setTodoList, calculateDone, calculatePlaned } = useSummaryStore()

    useEffect(() => {

        if(users && todos){
            updateUserStats(users)
            setTodoList(todos)
        }

    }, [users, todos])

    return <Container className="py-5">
        <h1 className="text-center mb-4">Users list </h1>
        <p className="text-center mb-4">Look on other user with statistic of finished and progress todo</p>

        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Done</th>
                <th>Need to do </th>
            </tr>
            </thead>
            <tbody>
            { usersStats && usersStats.map(userItem => {
                return  <tr key={userItem.id}>
                    <td>{userItem.id}</td>
                    <td>{userItem.name}</td>
                    <td>{calculateDone(userItem.id)}</td>
                    <td>{calculatePlaned(userItem.id)}</td>
                </tr>
            })}
            </tbody>
        </Table>
    </Container>
}
export default Summary;
