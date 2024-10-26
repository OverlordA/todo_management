import {Container, Table} from "react-bootstrap";
import {useSummaryStore} from "../../store/summary/summary";


const Summary = () => {

    const { usersStats, fullTodoList } = useSummaryStore()

    return <Container>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Complete</th>
                <th>Control</th>
            </tr>
            </thead>
            <tbody>
            {[{id: 1, name: "First user " }, {id: 2, name: 'secondUser' }].map(todoItem => {
                return  <tr key={todoItem.id}>
                    <td>{todoItem.name}</td>
                    <td>{todoItem.id}</td>
                    {/*<td>{todoItem.id === true ? "DONE" : "TODO"}</td>*/}
                    <td>
                        {/*<Button onClick={() => deleteTodo(todoItem.id)}>X</Button>*/}
                        {/*<Button onClick={() => toCreate()}>+</Button>*/}
                        {/*<Button onClick={() => editTodoItem(todoItem.id)}>/</Button>*/}
                    </td>
                </tr>
            })}
            </tbody>
        </Table>
    </Container>
}
export default Summary;
