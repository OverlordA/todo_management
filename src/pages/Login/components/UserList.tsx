import {Table} from "react-bootstrap";


type UserListProps = {
    userList: any[]
    selectUser: (userId: number ) => void
}

const UserList = ({ userList, selectUser }: UserListProps ) => {
    return <Table striped bordered hover>
        <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
        </thead>
        <tbody>
        {userList?.length && userList.map(user => {
            return  <tr key={user.name} onClick={() => selectUser(user.id)}>
                <td>{user.id}</td>
                <td colSpan={2}>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        })}
        </tbody>
    </Table>
}

export default UserList
