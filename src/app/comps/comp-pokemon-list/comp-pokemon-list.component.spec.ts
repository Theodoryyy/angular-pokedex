import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPokemonListComponent } from './comp-pokemon-list.component';

describe('CompPokemonListComponent', () => {
  let component: CompPokemonListComponent;
  let fixture: ComponentFixture<CompPokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPokemonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
