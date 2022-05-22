import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutePokemonListComponent } from './routes/route-pokemon-list/route-pokemon-list.component';
import { RoutePokemonComponent } from './routes/route-pokemon/route-pokemon.component';
import { CompPokemonListComponent } from './comps/comp-pokemon-list/comp-pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CompIntroComponent } from './comps/comp-pokemon-list/comp-intro/comp-intro.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutePokemonListComponent,
    RoutePokemonComponent,
    CompPokemonListComponent,
    CompIntroComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
