import {Acao} from "./acao";

export interface Investimento {
  nome: string;
  objetivo: string;
  indicadorCarencia: string;
  saldoTotal: number;
  acoes: Array<Acao>;
}
