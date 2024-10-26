import {useLoaderData} from "react-router-dom";
import {useEffect} from "react";
import {useTodoStore} from "./store/myTodo";


const MyTodoLit = () => {
    const todos = useLoaderData();

    const { todoList, updateTodoList} =
        useTodoStore();

    useEffect(() => {
        updateTodoList(todos as any[])
    }, [todos])

    return <div> My TODO list
        {todoList?.length && todoList.map(todoItem => {
            return <div key={todoItem.id}> {todoItem.title} </div>
        })}
    </div>
}

export default MyTodoLit;
