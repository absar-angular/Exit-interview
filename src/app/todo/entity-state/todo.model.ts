import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity"

export interface TODO {
    id:number
    todo:string
    complete:boolean
    userId:number
}

// entity state
export interface ToDoState extends EntityState<TODO> {
    selectedTodoId:number | null
}

// create entity adapter
export const todoAdapter:EntityAdapter<TODO> = createEntityAdapter<TODO>()

// initial state 

export const initialTodoState:ToDoState = todoAdapter.getInitialState({
    selectedTodoId:null
})

