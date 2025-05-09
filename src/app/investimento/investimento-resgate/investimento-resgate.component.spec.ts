import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestimentoResgateComponent } from './investimento-resgate.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { InvestimentoService } from '../../shared/services/investimento.service';

describe('InvestimentoResgateComponent', () => {
  let component: InvestimentoResgateComponent;
  let fixture: ComponentFixture<InvestimentoResgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestimentoResgateComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatDialogModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ nome: 'INVESTIMENTO TESTE' })
          }
        },
        {
          provide: InvestimentoService,
          useValue: {
            listarInvestimentos: jasmine.createSpy().and.returnValue(of({ listaInvestimentos: [] }))
          }
        },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InvestimentoResgateComponent);
    component = fixture.componentInstance;

    component.investimento = {
      nome: 'INVESTIMENTO TESTE',
      objetivo: 'Objetivo',
      saldoTotal: 10000,
      indicadorCarencia: 'N',
      acoes: [
        { id: '1', nome: 'AÇÃO 1', percentual: 50 },
        { id: '2', nome: 'AÇÃO 2', percentual: 50 }
      ]
    };

    component.resgate = [2000, 3000];
    component.saldosAcumulados = [5000, 5000];

    fixture.detectChanges();
  });

  it('deve validar que todos os valores são válidos', () => {
    expect(component.todosValoresValidos()).toBeTrue();
  });

  it('deve identificar erro se valor for maior que saldo acumulado', () => {
    component.resgate = [6000, 3000];
    expect(component.todosValoresValidos()).toBeFalse();
    expect(component.errosDeValidacao()).toContain('AÇÃO 1');
  });

  it('deve calcular corretamente o valor total de resgate', () => {
    expect(component.calculoResgate()).toBe(5000);
  });
});