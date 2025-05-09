import {Component, OnInit} from '@angular/core';
import {InvestimentoService} from "../../shared/services/investimento.service";
import {Investimento} from "../../shared/interfaces/investimento";
import {DataService} from "../../shared/services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-investimento-listagem',
  templateUrl: './investimento-listagem.component.html',
  styleUrls: ['./investimento-listagem.component.scss']
})
export class InvestimentoListagemComponent implements OnInit {

  listaInvestimentos: Array<Investimento> = [];

  constructor(private service: InvestimentoService,
              private dataService: DataService,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.obterInvestimentos();
  }

  obterInvestimentos(): void {
    this.service.listarInvestimentos().subscribe((response: any) => {
      this.listaInvestimentos = response.listaInvestimentos;
    });
  }

  asdf(inv: Investimento): void {
    if (inv.indicadorCarencia === 'N') {
      this.dataService.setStorage(inv);
      this.router.navigate(['/investimento/resgate', inv.nome]);
    }
  }

  // asdf(inv: Investimento) {
  //   if (inv.indicadorCarencia === 'N') {
  //     this.dataService.setStorage(inv);
  //     this.router.navigate(['/investimento/resgate']);
  //   }
  // }
}
