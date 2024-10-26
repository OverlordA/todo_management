import {useEffect} from "react";
import {getUsers} from "../../api/user";
import {useUsersStore} from "./store/user";


const Landing = () => {

    const { userList, updateUserList} =
        useUsersStore();

    const loadUsers = async () => {
       const userList =  await getUsers()
        updateUserList(userList)
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return <div>Landing

        {userList?.length && userList.map(user => {
            return <div key={user.name}>{user.name}</div>
        })  }
    </div>
}
export default Landing
