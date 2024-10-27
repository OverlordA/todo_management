import {create} from 'zustand';

interface ISummaryStore {
    usersStats: any [],
    fullTodoList: any [],
}

interface ISummaryAction {
    updateUserStats: (statsUserList: any []) => void
    setTodoList: (todoFullList: any []) => void
    calculateDone: (userId:string) => number
    calculatePlaned: (userId: string) => number
}

export const useSummaryStore = create<ISummaryStore & ISummaryAction>((set, getState) => ({
    usersStats:[],
    fullTodoList: [],
    updateUserStats: (todoList: any []) =>
        set((state: any) => ({...state, usersStats: todoList})),
    setTodoList:  (todoList: any []) =>
        set((state: any) => ({...state, fullTodoList: todoList})),
    calculateDone: (userId: string ) => {
        const state = getState();
       const filtered = state.fullTodoList.filter(item => (item.userId !== userId && !!item.completed))
       return filtered.length
    },
    calculatePlaned: (userId: string ) => {
        const state = getState();
        const filtered = state.fullTodoList.filter(item => (item.userId !== userId && !item.completed))
        return filtered.length
    },
}));
