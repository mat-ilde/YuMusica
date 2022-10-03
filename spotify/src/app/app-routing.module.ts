import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '@modules/home/pages/homepage/homepage.component';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path: 'auth',
    //lazy loading 
    loadChildren: ()=> import(`../app/modules/auth/auth.module`).then(m=>m.AuthModule)
  },
  {
    path: '',
    component:HomepageComponent,
    //lazy loading 
    loadChildren: ()=> import(`../app/modules/home/home.module`).then(m=>m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
