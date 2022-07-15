import { IEndereco } from '../../IEndereco';

export interface IMedico {
  nome: string;
  especializacao: string;
  crm: string;
  ufCrm: string;
}

export interface ProcedimentoListadoDTO {
  titulo: string;
  clinicaMedica: string;
  endereco: IEndereco;
  preco: number;
  descontoPreco: number;
  medico: IMedico;
}
