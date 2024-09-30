import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'trabalhe-conosco', component: TrabalheConoscoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
