import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestimentoListagemComponent } from './investimento-listagem.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { InvestimentoService } from 'src/app/shared/services/investimento.service';
import { DataService } from 'src/app/shared/services/data.service';

describe('InvestimentoListagemComponent', () => {
  let component: InvestimentoListagemComponent;
  let fixture: ComponentFixture<InvestimentoListagemComponent>;
  let mockService: jasmine.SpyObj<InvestimentoService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('InvestimentoService', ['listarInvestimentos']);

    await TestBed.configureTestingModule({
      declarations: [InvestimentoListagemComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: InvestimentoService, useValue: spy },
        { provide: DataService, useValue: { setStorage: () => {} } }
      ]
    }).compileComponents();

    mockService = TestBed.inject(InvestimentoService) as jasmine.SpyObj<InvestimentoService>;
    fixture = TestBed.createComponent(InvestimentoListagemComponent);
    component = fixture.componentInstance;
  });

  it('deve carregar a lista de investimentos', () => {
    const investimentosFake = {
      listaInvestimentos: [{
        nome: 'INVESTIMENTO TESTE',
        objetivo: 'Testar',
        saldoTotal: 10000,
        indicadorCarencia: 'N',
        acoes: []
      }]
    };
    mockService.listarInvestimentos.and.returnValue(of(investimentosFake));

    fixture.detectChanges();

    expect(component.listaInvestimentos.length).toBe(1);
    expect(component.listaInvestimentos[0].nome).toBe('INVESTIMENTO TESTE');
  });
});