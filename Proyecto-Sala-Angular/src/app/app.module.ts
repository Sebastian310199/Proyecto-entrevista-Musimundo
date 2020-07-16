import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AgregarSalaComponent } from './Components/Pages/agregar-sala/agregar-sala.component';
import { ListaSalaComponent } from './Components/Pages/lista-sala/lista-sala.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiSalaService } from './services/api-sala.service';
import { ModificarSalaComponent } from './Components/Pages/modificar-sala/modificar-sala.component';
import { FooterComponent } from './Components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AgregarSalaComponent,
    ListaSalaComponent,
    ModificarSalaComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ApiSalaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
