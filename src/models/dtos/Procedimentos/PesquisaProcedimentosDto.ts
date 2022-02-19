import { IntervaloNumerico } from '../IntervaloNumerico';

export interface PesquisaProcedimentosDto {
  termoPesquisa: string;
  especialidade: string;
  estado: string;
  cidade: string;
  avaliacao: number;
  precos: IntervaloNumerico;
}
