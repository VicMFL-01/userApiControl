import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';

export const routes: Routes = [
  {path:"", pathMatch:'full', redirectTo: 'home'},
  {path:"home", component:HomeComponent},
  {path:"user/:id", component:UserDetailComponent},
  {path:"newuser", component:NewUserComponent},
  {path:"updateuser", component:UpdateUserComponent}
];
