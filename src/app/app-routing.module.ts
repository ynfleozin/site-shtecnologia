import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { TermosComponent } from './termos/termos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'politica-de-privacidade', component: PrivacidadeComponent},
  {path: 'termos-de-uso', component: TermosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
