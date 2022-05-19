import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePokemonListComponent } from './route-pokemon-list.component';

describe('RoutePokemonListComponent', () => {
  let component: RoutePokemonListComponent;
  let fixture: ComponentFixture<RoutePokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutePokemonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
