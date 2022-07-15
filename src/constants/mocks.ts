import { ProcedimentoListadoDTO } from '../models/dtos/Procedimentos/ProcedimentoListadoDto';

export const PROCEDIMENTO_LISTADO_MOCK: ProcedimentoListadoDTO = {
  titulo: 'Exame exemplo asdf',
  clinicaMedica: 'Clinica Nostra',
  endereco: {
    complemento: 'Quadra 37',
    referencia: 'Próximo ao SuperMix',
    logradouro: 'Rua Sorocaba',
    numero: '03',
    bairro: 'Marcilio de Noronha',
    cidade: 'Viana',
    estado: 'ES',
    cep: '29135-372',
  },
  preco: 65.56,
  descontoPreco: 33,
  medico: {
    nome: 'Jean Pereira',
    especializacao: 'Ortopedista',
    crm: '69666',
    ufCrm: 'ES',
  },
};

export const PROCEDIMENTOS_LISTADOS_MOCK: ProcedimentoListadoDTO[] = [
  {
    titulo: 'Exame exemplo',
    clinicaMedica: 'Clinica Nostra',
    endereco: {
      complemento: 'Quadra 37',
      referencia: 'Próximo ao SuperMix',
      logradouro: 'Rua Sorocaba',
      numero: '03',
      bairro: 'Marcilio de Noronha',
      cidade: 'Viana',
      estado: 'ES',
      cep: '29135-372',
    },
    preco: 65.56,
    descontoPreco: 33,
    medico: {
      nome: 'Jean Pereira',
      especializacao: 'Ortopedista',
      crm: '69666',
      ufCrm: 'ES',
    },
  },
  {
    titulo: 'Exame exemplo 2',
    clinicaMedica: 'Clinica Nostra',
    endereco: {
      complemento: 'Quadra 37',
      referencia: 'Próximo ao SuperMix',
      logradouro: 'Rua Sorocaba',
      numero: '03',
      bairro: 'Marcilio de Noronha',
      cidade: 'Viana',
      estado: 'ES',
      cep: '29135-372',
    },
    preco: 65.56,
    descontoPreco: 33,
    medico: {
      nome: 'Jean Pereira',
      especializacao: 'Ortopedista',
      crm: '69666',
      ufCrm: 'ES',
    },
  },
];
