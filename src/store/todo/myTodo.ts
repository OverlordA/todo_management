import {create} from 'zustand';

interface ITodoStore {
    myTodoList: any [],
}

interface ITodoAction {
    updateTodoList: (todoList: any []) => void
}

export const useTodoStore = create<ITodoStore & ITodoAction>(set => ({
    myTodoList:[],
    updateTodoList: (todoList: any []) =>
        set((state: any) => ({...state, myTodoList: todoList})),

}));
