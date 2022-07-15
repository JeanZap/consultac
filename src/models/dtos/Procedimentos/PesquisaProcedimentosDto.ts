import { IntervaloNumerico } from '../../IntervaloNumerico';

export interface PesquisaProcedimentosDto {
  termoPesquisa: string;
  especialidade: string;
  estado: string;
  cidade: string;
  avaliacao: IntervaloNumerico;
  precos: IntervaloNumerico;
}
