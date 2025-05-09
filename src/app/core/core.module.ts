import {LOCALE_ID, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: LOCALE_ID, useValue: 'pt-BR'},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
      ]
    };
  }
}
