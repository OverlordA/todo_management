import {useLoaderData, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useTodoStore} from "../../store/todo/myTodo";
import {Button, Table, Modal} from "react-bootstrap";
import {useUsersStore} from "../../store/user/user";

const MyTodoList= () => {
    const todos = useLoaderData();
    const [deleteConfirm, setDeleteConfirm] = useState<string |boolean >(false)

    const { myTodoList, updateTodoList} =
        useTodoStore();
    const { selectedUser } = useUsersStore()
    const navigate = useNavigate();

    useEffect(() => {
        updateTodoList(todos as any[])
    }, [todos])

    const deleteTodo = (id:string ) => {
        // open delete confirmation dialog
        console.log('User id to delete ', id)
        setDeleteConfirm(id);
    }

    const toCreate = () => {
        navigate('/create-todo')
    }
    const editTodoItem = (id:number)  => {
        navigate(`/edit-todo/${id}`)
    }

    return <div>
       <h3>{selectedUser.name} here you can manipulate your todos
       <p>
           X - Delete todo
           + - Add new one
           / - Edit todo
       </p>
       </h3>


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
            {myTodoList?.length && myTodoList.map(todoItem => {
                return  <tr key={todoItem.id}>
                    <td>{todoItem.id}</td>
                    <td>{todoItem.title}</td>
                    <td>{todoItem.complete === true ? "DONE" : "TODO"}</td>
                    <td>
                        <Button onClick={() => deleteTodo(todoItem.id)}>X</Button>
                        <Button onClick={() => toCreate()}>+</Button>
                        <Button onClick={() => editTodoItem(todoItem.id)}>/</Button>
                    </td>
                </tr>
            })}
            </tbody>
        </Table>

        {deleteConfirm &&   <div
            className="modal show"
            style={{ display: 'block', position: 'absolute', top: 10, }}
        >
            <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => setDeleteConfirm(false)}>Cancel</Button>
                <Button variant="primary">Delete</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </div>}

    </div>
}

export default MyTodoList;
