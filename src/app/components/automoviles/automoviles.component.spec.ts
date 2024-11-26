import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AutomovilesComponent } from './automoviles.component';

describe('AutomovilesComponent', () => {
  let component: AutomovilesComponent;
  let fixture: ComponentFixture<AutomovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomovilesComponent ],
      imports: [ CommonModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener datos de usuario', () => {
    expect(component.automoviles.length).toBeGreaterThan(0);
    expect(component.automoviles[0].nombre).toBe('Mitsubishi L200');
  });

  it('Se deberian ver los datos de automoviles', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card-title').textContent).toContain('Mitsubishi L200');
  });

  it('Se deberian ver las cards', () => {
    const cardElements = fixture.debugElement.queryAll(By.css('.card'));
    expect(cardElements.length).toBe(component.automoviles.length);
  });
});
