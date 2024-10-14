import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './contato/contato.component';
import { AboutComponent } from './about/about.component';
import { CasesComponent } from './cases/cases.component';
import { ImageboxComponent } from './imagebox/imagebox.component';
import { ContainerComponent } from './container/container.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { HomeComponent } from './home/home.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContatoComponent,
    AboutComponent,
    CasesComponent,
    ImageboxComponent,
    ContainerComponent,
    TrabalheConoscoComponent,
    HomeComponent,
    PrivacidadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
