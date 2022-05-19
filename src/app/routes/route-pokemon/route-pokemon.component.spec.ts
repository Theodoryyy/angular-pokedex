import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePokemonComponent } from './route-pokemon.component';

describe('RoutePokemonComponent', () => {
  let component: RoutePokemonComponent;
  let fixture: ComponentFixture<RoutePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutePokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
