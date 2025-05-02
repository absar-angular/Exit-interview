import { createAction, props } from "@ngrx/store";
import { Users } from "./users.model";


export const loadUsersAction = createAction('[User] Load Action')
export const resetUsers = createAction('[User] Reset Action')
export const loadUsersSuccess = createAction('[User] Success Action',props<{users:Users[]}>())
export const selectedUser = createAction('[User] Select user Action',props<{userId:number}>())
export const loadUsersFailure = createAction('[User] Failure Action',props<{error:string}>())