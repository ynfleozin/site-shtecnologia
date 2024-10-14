import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'trabalhe-conosco', component: TrabalheConoscoComponent},
  {path: 'blog', component: BlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
