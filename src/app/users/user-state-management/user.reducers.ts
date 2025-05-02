import { createFeature, createReducer, on } from "@ngrx/store";
import { initUserState } from "./users.model";
import { loadUsersAction, loadUsersFailure, loadUsersSuccess, resetUsers, selectedUser } from "./user.actions";


export const userReducer = createReducer(
             initUserState,
             on(loadUsersAction,state => ({...state,isLoading:true})),
             on(loadUsersSuccess,(state,{users}) => ({...state,isLoading:false,users})),
             on(loadUsersFailure,(state,{error}) => ({...state,isLoading:false,error})),
             on(selectedUser,(state,{userId}) => ({...state,isLoading:false,userId})),
             on(resetUsers, () => initUserState),
             )

export const userFeature = createFeature({
    name:'users',
    reducer:userReducer
})