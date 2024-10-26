import {create} from 'zustand';

interface IUserStore {
    userList: any [],
    selectedUser: any,
}

interface IUserAction {
    updateUserList: (userList: any []) => void
    loginUser: (user: any) => void
    logoutUser: () => void
}

export const useUsersStore = create<IUserStore & IUserAction>(set => ({
    userList:[],
    selectedUser: null,
    updateUserList: (userList: any []) =>
        set((state: any) => ({...state, userList: userList})),
    loginUser: (userData: any) =>
        set((state: any) => ({...state, selectedUser: userData })),
    logoutUser: () => set((state: any ) => ({...state, selectedUser: null }))
}));
