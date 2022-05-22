import { Component, OnInit } from '@angular/core';
import { ServPokeapiService } from 'src/app/services/serv-pokeapi/serv-pokeapi.service';

@Component({
  selector: 'app-route-pokemon-list',
  templateUrl: './route-pokemon-list.component.html',
  styleUrls: ['./route-pokemon-list.component.scss'],
})
export class RoutePokemonListComponent implements OnInit {
  public nextPage: string = '';
  public pokemonList: any = [];

  constructor(private servPokeapi: ServPokeapiService) {}

  ngOnInit(): void {
    this.getPokemonList('https://pokeapi.co/api/v2/pokemon'); 
  }

  private getPokemonList(link: string) {
    this.servPokeapi.getData(link, (res: any) => {
      console.log(res);
      this.nextPage = res.next;
      this.pokemonList = this.pokemonList.concat(res.results);
    });
  }

  public loadMore(nextPage: string) {
    this.getPokemonList(nextPage);
  }
}
