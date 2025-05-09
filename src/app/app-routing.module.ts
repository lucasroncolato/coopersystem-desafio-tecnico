import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {TesteComponent} from "./teste/teste.component";

const routes: Routes = [
  {path: '', redirectTo: 'investimento', pathMatch: 'full'},
  {
    path: 'investimento',
    loadChildren: () => import('./investimento/investimento.module').then(m => m.InvestimentoModule)
  },
  // {path: 'teste', component: TesteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
