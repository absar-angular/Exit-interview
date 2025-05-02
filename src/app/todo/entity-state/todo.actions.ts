import { createAction, props } from "@ngrx/store";
import { TODO } from "./todo.model";
import { Update } from "@ngrx/entity";

export const loadTodo = createAction('[TODO page] Load Todo Action')
export const loadTodoSuccess = createAction('[TODO page] Add Todo Action', props<{todos:TODO[]}>())
export const loadTodoFailure = createAction('[TODO page] Add Todo Action', props<{error:string}>())
export const addTodo = createAction('[TODO page] Add Todo Action',props<{todo:TODO}>())
export const updateTodo = createAction('[TODO page] Update Todo Action',props<{update:Update<TODO>}>())
export const deleteTodo = createAction('[TODO page] Delete Todo Action',props<{id:number}>)