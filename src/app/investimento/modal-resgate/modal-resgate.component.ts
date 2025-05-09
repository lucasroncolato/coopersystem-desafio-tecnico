import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-resgate',
  templateUrl: './modal-resgate.component.html',
  styleUrls: ['./modal-resgate.component.scss']
})
export class ModalResgateComponent implements OnInit {

  sucesso: boolean;
  resgatesNaoPermitidos: Array<{
    acao: string,
    valor: number
  }> = [];

  constructor(private dialogRef: MatDialogRef<ModalResgateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.verificaRestage();
  }

  verificaRestage(): void {
    for (let i = 0; i < this.data.resgate.length; i++) {
      if (this.data.resgate[i] > this.data.saldosAcumulados[i]) {
        this.resgatesNaoPermitidos.push({
          acao: this.data.investimento.acoes[i].nome,
          valor: this.data.saldosAcumulados[i]
        })

      }
    }

    this.sucesso = this.resgatesNaoPermitidos.length === 0;
  }

  fecharModal(): void {
    this.dialogRef.close({sucesso: this.sucesso});
  }

}
