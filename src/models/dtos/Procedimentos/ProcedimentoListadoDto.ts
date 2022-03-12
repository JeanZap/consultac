export interface IMedico {
  nome: string;
  especializacao: string;
  crm: string;
  ufCrm: string;
}

export interface ProcedimentoListadoDTO {
  titulo: string;
  clinicaMedica: string;
  endereco: string;
  preco: number;
  descontoPreco: number;
  medico: IMedico;
}
