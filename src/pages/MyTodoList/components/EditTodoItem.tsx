import {Button, Container, Form, Row} from "react-bootstrap";
import TodoForm from "./TodoForm";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getTodo, updateTodoRequest} from "../../../api/todo";
import {getAuthUser} from "../../../util/localStorage";
import {useUsersStore} from "../../../store/user/user";
import {useTodoStore} from "../../../store/todo/myTodo";


const EditTodoItem = () => {

    const navigate = useNavigate();
    const { todoId } = useParams();
    const [editTodoItem, setEditItem ] = useState<{ title: string }>();
    const { selectedUser } = useUsersStore()
    const { updateTodo } = useTodoStore()


    useEffect(() => {
        getTodoItem();
    }, [])

    const getTodoItem = async () => {
        const todoItem = await getTodo(todoId as string );
        setEditItem(todoItem)
    }

    const updateTodoItem = async (values:any) => {
        let updatedTodo = null
            updatedTodo = await updateTodoRequest(todoId as string, {
                title: values.title,
                ...editTodoItem
            })
            updateTodo(updatedTodo)
        if(!selectedUser) {
            const user = getAuthUser()
            navigate(`/my-todo/${user.id}`)
        }
    }


    return   <Container className="py-5">
                {
                    editTodoItem &&   <TodoForm
                        title="Update Your Todo Item"
                        buttonText={'Update'}
                        submit={updateTodoItem}
                        initValues={{
                            title: editTodoItem.title as string,
                        }}
                    />
                }
            </Container>
}

export default EditTodoItem
