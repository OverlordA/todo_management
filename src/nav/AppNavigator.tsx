import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MyTodoList from "../pages/MyTodoList/MyTodoList";
import Summary from "../pages/Summary/Summary";
import ErrorPage from "../pages/Error/ErrorPage";
import {getUsers} from "../api/user";
import {getListTodo, getTodo, userTodos} from "../api/todo";
import React from "react";
import Tutorial from "../pages/Tutorial/Tutorial";
import Login from "../pages/Login/Login";
import CreateTodoItem from "../pages/MyTodoList/components/CreateTodoItem";
import EditTodoItem from "../pages/MyTodoList/components/EditTodoItem";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Tutorial />,
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <Login />,
        loader: () => (getUsers()),
    },
    {
        path: '/my-todo',
        errorElement: <ErrorPage />,
        children: [
            {
                path: ':userId',
                loader: ({params}) => (userTodos(params.userId as string )),
                element: <MyTodoList />,
            },
        ]
    },
    {
        path: '/create-todo',
        element: <CreateTodoItem />,
    },
    {
        path: '/edit-todo/:todoId',
        loader: ({params}) => (getTodo(params.todoId as string)),
        element: <EditTodoItem />,
    },
    {
        path: '/summary',
        loader: () => (getUsers()),
        children: [
            {
                path: ':userId',
                loader: ({params}) => (userTodos(params.userId as string )),
                element: <Summary />,
            }
        ]
    },
]);


const AppNavigator = () => {
    return <RouterProvider router={router}  />
}
export default AppNavigator
