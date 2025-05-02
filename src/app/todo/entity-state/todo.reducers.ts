
import { createReducer, on } from '@ngrx/store'
import { initialTodoState, todoAdapter } from './todo.model'
import * as TodoActions from './todo.actions'

export const todoReducer = createReducer(
    initialTodoState,
    on(TodoActions.loadTodo, state => ({...state})),
    // on(TodoActions.loadTodoSuccess, (state,{todos}) =>)
)