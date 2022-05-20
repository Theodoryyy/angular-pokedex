import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompIntroComponent } from './comp-intro.component';

describe('CompIntroComponent', () => {
  let component: CompIntroComponent;
  let fixture: ComponentFixture<CompIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
