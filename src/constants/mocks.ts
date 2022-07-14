import { ProcedimentoListadoDTO } from "../models/dtos/Procedimentos/ProcedimentoListadoDto";

export const PROCEDIMENTO_LISTADO_MOCK: ProcedimentoListadoDTO = {
  titulo: 'Exame exemplo asdf',
  clinicaMedica: 'Clinica Nostra',
  endereco: 'Rua sorocaba, N 03 Q 37, Marcilio de Noronha, Viana',
  preco: 65.56,
  descontoPreco: 33,
  medico: {
    nome: 'Jean Pereira',
    especializacao: 'Ortopedista',
    crm: '69666',
    ufCrm: 'ES',
  },
};
