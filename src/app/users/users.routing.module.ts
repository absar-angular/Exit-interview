import {  Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { provideState } from "@ngrx/store";
import { userFeature } from "./user-state-management/user.reducers";
import { provideEffects } from "@ngrx/effects";
import { UserEffects } from "./user-state-management/user.effects";


export const userRoutes :Routes = [
    {
        path:'',
        component:UsersComponent,
        providers:[
            provideState(userFeature),
            provideEffects(UserEffects)
        ]
    }
]
