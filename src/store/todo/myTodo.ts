import {create} from 'zustand';

interface ITodoStore {
    myTodoList: any [],
}

interface ITodoAction {
    updateTodoList: (todoList: any []) => void
    deleteTodoFromList: (id: string) => void
    pushNewTodo: (newTodo: any) => void
    updateTodo: (updatedTodo: any) => void
}

export const useTodoStore = create<ITodoStore & ITodoAction>(set => ({
    myTodoList:[],
    deleteTodoFromList: (id:string) =>
        set((state: any) => ({...state, myTodoList: state.myTodoList.filter((item: any) => item.id !== id )})),
    updateTodoList: (todoList: any []) =>
        set((state: any) => ({...state, myTodoList: todoList})),
    pushNewTodo: (newTodo: any ) =>
        set((state: any) => ({...state, myTodoList: [...state.myTodoList, newTodo]})),
    updateTodo: (updatedTodo: any ) =>
        set((state: any) => ({...state, myTodoList: state.myTodoList.map((item: any) => {
            if(item.id === updatedTodo.id) return updatedTodo
                return item
            })})),

}));
