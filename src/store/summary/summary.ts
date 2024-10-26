import {create} from 'zustand';

interface ISummaryStore {
    usersStats: any [],
    fullTodoList: any [],
}

interface ISummaryAction {
    updateUserStats: (statsUserList: any []) => void
    setTodoList: (todoFullList: any []) => void
}

export const useSummaryStore = create<ISummaryStore & ISummaryAction>((set, getState) => ({
    usersStats:[],
    fullTodoList: [],
    updateUserStats: (todoList: any []) =>
        set((state: any) => ({...state, usersStats: todoList})),
    setTodoList:  (todoList: any []) =>
        set((state: any) => ({...state, fullTodoList: todoList})),
    calculateTodo: (userId: string ) => {
        const state = getState();
        const finished = 0;
        const needToDo = 10;
        return {
            finished,
            needToDo
        }
    }
}));
