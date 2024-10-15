import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { TermosComponent } from './termos/termos.component';
import { SuporteComponent } from './suporte/suporte.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'politica-de-privacidade', component: PrivacidadeComponent},
  {path: 'termos-de-uso', component: TermosComponent},
  {path: 'suporte', component: SuporteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
