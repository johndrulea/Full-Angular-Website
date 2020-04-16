import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ConverterComponent } from './components/converter/converter.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

// registering paths
const routes: Routes = [
  {  path: '',component: MainPageComponent},
  {  path: 'contact', component: ContactPageComponent},
  {  path: 'converter', component: ConverterComponent},
  {  path: 'user-register', component: UserRegisterComponent},
  {  path: 'user-list', component: UserListComponent},
  {  path: 'todo-list', component: TodoListComponent},
  {  path: 'user-login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
