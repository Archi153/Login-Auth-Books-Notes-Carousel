import { NgModule } from '@angular/core';
import {AuthGuard} from "./auth/auth.guard";
import {NotAuthGuard} from "./auth/not-auth.guard";
import {LoginComponent} from "./auth/login/login.component";
import { RouterModule, Routes } from '@angular/router';
import {PageOneComponent} from "./pages/page-one/page-one.component";
import {PageTwoComponent} from "./pages/page-two/page-two.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }
  ,
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'page-1',
    component: PageOneComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'page-3',
    component: PageTwoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-4',
    component: PageTwoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-5',
    component: PageTwoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }