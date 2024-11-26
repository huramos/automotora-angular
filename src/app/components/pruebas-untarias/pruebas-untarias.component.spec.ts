import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasUntariasComponent } from './pruebas-untarias.component';

describe('PruebasUntariasComponent', () => {
  let component: PruebasUntariasComponent;
  let fixture: ComponentFixture<PruebasUntariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebasUntariasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PruebasUntariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
