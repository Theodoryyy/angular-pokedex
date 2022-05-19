import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutePokemonListComponent } from './routes/route-pokemon-list/route-pokemon-list.component';
import { RoutePokemonComponent } from './routes/route-pokemon/route-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutePokemonListComponent,
    RoutePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
