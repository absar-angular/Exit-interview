import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AgentComponent } from './agent/agent.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/agent', pathMatch: 'full' },
  { path: 'agent', component: AgentComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'products', loadChildren: () => import('./product-list/product.routes').then(Route => Route.productRoutes) },
  { path: 'users', loadChildren: () => import('./users/users.routing.module').then(Route => Route.userRoutes) }
];


