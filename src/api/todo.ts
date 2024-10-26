import axiosInstance from "./axiosInstance";


const getListTodo = async () => {
    try {
        const { data } = await axiosInstance.get(`/todos`);
        return data;
    }catch(err){
        console.error('Select todos error: ', err)
    }
}

const updateTodo = () => {

}

export {
    getListTodo,
    updateTodo
}
