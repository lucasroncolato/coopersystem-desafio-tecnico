import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalResgateComponent } from './modal-resgate.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ModalResgateComponent', () => {
  let component: ModalResgateComponent;
  let fixture: ComponentFixture<ModalResgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalResgateComponent],
      imports: [MatDialogModule, NoopAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: { close: () => {} } },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            resgate: [],
            saldosAcumulados: [],
            investimento: { acoes: [] }
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalResgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});