import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'trabalhe-conosco', component: TrabalheConoscoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
