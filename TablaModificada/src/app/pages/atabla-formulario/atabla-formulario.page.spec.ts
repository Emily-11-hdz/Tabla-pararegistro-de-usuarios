import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtablaFormularioPage } from './atabla-formulario.page';

describe('AtablaFormularioPage', () => {
  let component: AtablaFormularioPage;
  let fixture: ComponentFixture<AtablaFormularioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtablaFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
