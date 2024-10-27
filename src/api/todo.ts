import axiosInstance from "./axiosInstance";


const getListTodo = async () => {
    try {
        const { data } = await axiosInstance.get(`/todos`);
        return data;
    }catch(err){
        console.error('Select todos error: ', err)
    }
}

const userTodos = async (userId: string )=> {
    try {
        const { data } = await axiosInstance.get(`/todos?userId=${userId}`);
        return data;
    }catch(err){
        console.error('Select todos error: ', err)
    }
}

const deleteTodoRequest = async (todoId: string | boolean) => {
    try {
        const { data } = await axiosInstance.delete(`/todos/${todoId}`);
        return data;
    }catch(err){
        console.error('Select todos error: ', err)
    }
}

const createTodoRequest = async (title: string, userId: string) => {
    try {
        const { data } = await axiosInstance.post(`/todos`, { title: title, userId, completed: false });
        return data;
    }catch(err){
        console.error('Select todos error: ', err)
    }
}

const updateTodoRequest = async (todoId: string, updateInfo: any ) => {
    try {
        const { data } = await axiosInstance.put(`/todos/${todoId}`, { ...updateInfo });
        return data;
    }catch(err){
        console.error('Select todos error: ', err)
    }
}
const getTodo = async (id:string) => {
    try {
        const { data } = await axiosInstance.get(`/todos/${id}`);
        return data;
    }catch(err){
        console.error('Select todos error: ', err)
    }
}

export {
    getListTodo,
    updateTodoRequest,
    userTodos,
    getTodo,
    deleteTodoRequest,
    createTodoRequest
}
