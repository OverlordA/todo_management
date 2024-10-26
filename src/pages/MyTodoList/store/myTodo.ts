import {create} from 'zustand';

interface ITodoStore {
    todoList: any [],
}

interface ITodoAction {
    updateTodoList: (todoList: any []) => void
}

export const useTodoStore = create<ITodoStore & ITodoAction>(set => ({
    todoList:[],
    updateTodoList: (todoList: any []) =>
        set((state: any) => ({...state, userList: todoList})),

}));
