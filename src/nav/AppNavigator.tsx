import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Landing from "../pages/Langing/Langing";
import MyTodoList from "../pages/MyTodoList/MyTodoLit";
import Summary from "../pages/Summary/Summary";
import ErrorPage from "../pages/Error/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorPage />
    },
    {
        path: '/my-todo',
        element: <MyTodoList />
    },
    {
        path: '/summary',
        element: <Summary />
    },
]);

const AppNavigator = () => {

    return <RouterProvider router={router}  />
}
export default AppNavigator
