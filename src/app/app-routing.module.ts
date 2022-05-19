import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePokemonListComponent } from './routes/route-pokemon-list/route-pokemon-list.component';
import { RoutePokemonComponent } from './routes/route-pokemon/route-pokemon.component';

const routes: Routes = [
  {
    path: "pokemon-list",
    component: RoutePokemonListComponent
  },
  {
    path: "pokemon",
    component: RoutePokemonComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "pokemon-list"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
