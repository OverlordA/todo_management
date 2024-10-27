import {Container, Row} from "react-bootstrap";
import TodoForm from "./TodoForm";
import {useNavigate} from "react-router-dom";
import {useUsersStore} from "../../../store/user/user";
import {getAuthUser} from "../../../util/localStorage";
import {createTodoRequest } from "../../../api/todo";
import {useTodoStore} from "../../../store/todo/myTodo";


const CreateTodoItem = () => {

    const navigate = useNavigate();
    const { selectedUser } = useUsersStore()
    const { pushNewTodo } = useTodoStore()


    const create = async (values:any) => {
        let createdTodo = null
        if(!selectedUser){
            const user = getAuthUser()
            createdTodo = await createTodoRequest(values.title, user.id)
            pushNewTodo(createdTodo)
            navigate(`/my-todo/${user.id}`)
        }else{
            createdTodo = await createTodoRequest(values.title, selectedUser.id)
            pushNewTodo(createdTodo)
            navigate(`/my-todo/${selectedUser.id}`)
        }

    }

    return <Container className="py-5">
                <TodoForm
                    title="Create new Todo Item"
                    buttonText={'Create'}
                    submit={create}
                    initValues={{
                        title: "",
                    }}
                />
            </Container>
}

export default CreateTodoItem;
