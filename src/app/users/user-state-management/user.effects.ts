import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUsersAction, loadUsersFailure, loadUsersSuccess, resetUsers } from "./user.actions";
import { HttpClient } from "@angular/common/http";
import { catchError, filter, map, Observable, of, switchMap } from "rxjs";
import { Users } from "./users.model";
import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";

@Injectable()
export class UserEffects {

    constructor(private action$:Actions,private http:HttpClient,private router:Router){}

    userLoad$ = createEffect(()=>{
       return this.action$.pipe(
            ofType(loadUsersAction),
            switchMap(()=>{
                return this.getUsers().pipe(
                map((user:{users:Users[]}) =>{
                     const {users} = user
                     return loadUsersSuccess({users})
                }),
                catchError((error)=> of(loadUsersFailure(error)))
                )
            })
        )
    })

    //  resetEffect$ = createEffect(()=>{
    //        return this.router.events.pipe(
    //        filter(event => event instanceof NavigationStart),
    //        map(()=> resetUsers())
    //        )
    //     })
        
   getUsers():Observable<{users:Users[]}>{
    const url = 'https://dummyjson.com/users'
    return this.http.get<{users:Users[]}>(url)
   }
}