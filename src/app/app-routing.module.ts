import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'update/:id', component: InputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
