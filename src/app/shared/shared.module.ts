import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxCurrencyModule} from "ngx-currency";

import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from "@angular/material/dialog";

export const modules = [
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  NgxCurrencyModule,
  MatIconModule,
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
