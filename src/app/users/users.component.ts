import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsersAction, resetUsers } from './user-state-management/user.actions';
import { userFeature } from './user-state-management/user.reducers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class UsersComponent implements OnDestroy {
  users$ = this.store.select(userFeature.selectUsers)

  constructor(private store:Store){
    this.store.dispatch(loadUsersAction())
    
  }

  ngOnDestroy(){
    this.store.dispatch(resetUsers())
  }
}
