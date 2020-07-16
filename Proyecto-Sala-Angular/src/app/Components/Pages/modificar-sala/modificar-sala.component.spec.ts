import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSalaComponent } from './modificar-sala.component';

describe('ModificarSalaComponent', () => {
  let component: ModificarSalaComponent;
  let fixture: ComponentFixture<ModificarSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
