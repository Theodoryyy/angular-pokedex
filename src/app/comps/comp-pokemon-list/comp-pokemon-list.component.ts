import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-pokemon-list',
  templateUrl: './comp-pokemon-list.component.html',
  styleUrls: ['./comp-pokemon-list.component.scss'],
})
export class CompPokemonListComponent implements OnInit {
  @Input() list: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // fazer melhor
  public openPokemon(id: any) {
    this.router.navigateByUrl('pokemon/' + id);
  }
}
