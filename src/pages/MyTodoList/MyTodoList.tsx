import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import {BsFillPencilFill, BsFillPlusSquareFill, BsFillTrashFill, BsPencil, BsPlusCircle, BsTrash} from "react-icons/bs";
import {useEffect, useState} from "react";
import {useTodoStore} from "../../store/todo/myTodo";
import {Button, Table, Modal, Row, Container, Col} from "react-bootstrap";
import {useUsersStore} from "../../store/user/user";
import {deleteTodoRequest, userTodos} from "../../api/todo";
import './myTodo.css';

const MyTodoList= () => {
    const todos = useLoaderData();
    const { userId } = useParams()
    const [deleteConfirm, setDeleteConfirm] = useState<string |boolean >(false)

    const { myTodoList, updateTodoList, deleteTodoFromList} =
        useTodoStore();
    const { selectedUser } = useUsersStore()
    const navigate = useNavigate();

    useEffect(() => {
        updateTodoList(todos as any[])
    }, [todos])

    useEffect(() => {
        if(userId && myTodoList.length < 0){
            loadUserTodos(userId)
        }
    }, [])

    const loadUserTodos = async (userId: string) => {
        const todos = await  userTodos(userId)
        updateTodoList( todos as any[])
    }

    const deleteTodo = (id:string) => {
        // open delete confirmation dialog
        setDeleteConfirm(id);
    }

    const makeDelete = async () => {
       await deleteTodoRequest(deleteConfirm);
       deleteTodoFromList(deleteConfirm as string)
       setDeleteConfirm(false)
    }

    const toCreate = () => {
        navigate('/create-todo')
    }
    const editTodoItem = (id:number)  => {
        navigate(`/edit-todo/${id}`)
    }

    return <Container className="py-5">
        <h1 className="text-center mb-4">My Todo List</h1>
        <p className="text-center mb-4">Manage your tasks efficiently by adding, editing, or deleting todos.</p>

        <Row className="text-center mb-4">
            <Col>
                <BsPencil className="me-2" /> - Edit Todo
            </Col>
            <Col>
                <BsPlusCircle className="me-2" /> - Add New Todo
            </Col>
            <Col>
                    <BsTrash className="me-2" /> - Delete Todo
            </Col>
        </Row>

        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Completed</th>
                <th>Control</th>
            </tr>
            </thead>
            <tbody>
            {myTodoList?.length > 0 && myTodoList.map((todoItem: any) => (
                <tr key={todoItem.id}>
                    <td>{todoItem.id}</td>
                    <td>{todoItem.title}</td>
                    <td>{todoItem.completed ? 'Yes' : 'No'}</td>
                    <td className={'control_block'}>
                        <Button variant="primary" size="sm" onClick={() => editTodoItem(todoItem.id)} className="me-2">
                            <BsPencil />
                        </Button>
                        <Button variant="primary" size="sm" className="me-2" onClick={() => toCreate()}>
                            <BsPlusCircle />
                        </Button>
                        <Button variant="danger" size="sm" onClick={() => deleteTodo(todoItem.id)}>
                            <BsTrash />
                        </Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
        {deleteConfirm &&   <div
            className="modal show"
            style={{ display: 'block', position: 'fixed', top: 10, }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Delete todo </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to delete ? </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setDeleteConfirm(false)}>Cancel</Button>
                    <Button variant="danger" onClick={() => makeDelete()}>Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>}
    </Container>

}

export default MyTodoList;
