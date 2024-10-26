import {create} from 'zustand';

interface IUserStore {
    userList: any [],
}

interface IUserAction {
    updateUserList: (userList: any []) => void

}

export const useUsersStore = create<IUserStore & IUserAction>(set => ({
    userList:[],
    updateUserList: (userList: any []) =>
        set((state: any) => ({...state, userList: userList})),

}));
