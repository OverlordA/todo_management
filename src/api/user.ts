import axiosInstance from "./axiosInstance";


const getUsers = async () => {
    try {
        const { data } = await axiosInstance.get(`/users`);
        return data;
    }catch(err){
        console.error('Select users error: ', err)
    }
}

const getUser = async (userId: number) => {
    try {
        const { data } = await axiosInstance.get(`/users/${userId}`);
        return data;
    }catch(err){
        console.error('Select users error: ', err)
    }
}


export {
    getUsers,
    getUser,
}
