import { Component, OnInit } from '@angular/core';
import { ServPokeapiService } from 'src/app/services/serv-pokeapi/serv-pokeapi.service';

@Component({
  selector: 'app-route-pokemon-list',
  templateUrl: './route-pokemon-list.component.html',
  styleUrls: ['./route-pokemon-list.component.scss'],
})
export class RoutePokemonListComponent implements OnInit {
  public pokemonList: any;

  constructor(private servPokeapi: ServPokeapiService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  private getPokemonList() {
    this.servPokeapi.getData('pokemon', (res: any) => {
      console.log(res);
      this.pokemonList = res.results;
    });
  }
}
