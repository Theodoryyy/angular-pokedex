import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-pokemon-list',
  templateUrl: './comp-pokemon-list.component.html',
  styleUrls: ['./comp-pokemon-list.component.scss'],
})
export class CompPokemonListComponent implements OnInit {
  @Input() list: any;

  constructor() {}

  ngOnInit(): void {}
}
