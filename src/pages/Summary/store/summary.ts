import {create} from 'zustand';

interface ISummaryStore {
    todoCompleted: any [],
    todoIncomplete: any []
}

interface ISummaryAction {
    updateTodoComp: (todoList: any []) => void
    updateTodoIncomplete: (todoList: any []) => void
}

export const useSummaryStore = create<ISummaryStore & ISummaryAction>(set => ({
    todoCompleted:[],
    todoIncomplete:[],
    updateTodoComp: (todoList: any []) =>
        set((state: any) => ({...state, todoCompleted: todoList})),
    updateTodoIncomplete: (todoList: any []) =>
        set((state: any) => ({...state, todoIncomplete: todoList})),

}));
