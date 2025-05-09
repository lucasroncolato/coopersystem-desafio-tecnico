import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvestimentoComponent} from "./investimento.component";
import {InvestimentoListagemComponent} from "./investimento-listagem/investimento-listagem.component";
import {InvestimentoResgateComponent} from "./investimento-resgate/investimento-resgate.component";

const routes: Routes = [
  {
    path: '', component: InvestimentoComponent, children: [
      { path: '', redirectTo: 'listagem', pathMatch: 'full' },
      {path: 'listagem', component: InvestimentoListagemComponent},
      {path: 'resgate/:nome', component: InvestimentoResgateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestimentoRoutingModule { }
