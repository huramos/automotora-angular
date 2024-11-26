import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilComponent],
      imports: [CommonModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia Crear', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener datos de usuario', () => {
    expect(component.usuario).toBeDefined();
    expect(component.usuario.nombre).toBe('Hugo Ramos');
  });

  it('Se deberian ver los datos de usuarios', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Perfil de Usuario');
    expect(compiled.querySelector('p').textContent).toContain('Hugo Ramos');
  });

  it('Se deberian ver los campos', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p:nth-of-type(1)').textContent).toContain('Hugo Henriquez');
    expect(compiled.querySelector('p:nth-of-type(2)').textContent).toContain('25');
    expect(compiled.querySelector('p:nth-of-type(3)').textContent).toContain('hugo.ramos@duoc.com');
    expect(compiled.querySelector('p:nth-of-type(4)').textContent).toContain('Santiago, chile');
  });
});
