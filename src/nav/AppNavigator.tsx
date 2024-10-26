import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Landing from "../pages/Langing/Langing";
import MyTodoList from "../pages/MyTodoList/MyTodoLit";
import Summary from "../pages/Summary/Summary";
import ErrorPage from "../pages/Error/ErrorPage";
import {getUsers} from "../api/user";
import {getListTodo} from "../api/todo";


const router = createBrowserRouter([
    {
        path: "/",
        loader: () => (getUsers()),
        element: <Landing />,
        errorElement: <ErrorPage />
    },
    {
        path: '/my-todo',
        loader: () => (getListTodo()),
        element: <MyTodoList />,
    },
    {
        path: '/summary',
        loader: () => (getUsers()),
        element: <Summary />
    },
]);


const AppNavigator = () => {
    return <RouterProvider router={router}  />
}
export default AppNavigator
