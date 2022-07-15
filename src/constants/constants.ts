import { PesquisaProcedimentosDto } from '../models/dtos/Procedimentos/PesquisaProcedimentosDto';

export const ESTADOS = [{ label: 'ES' }, { label: 'MG' }];

export const CIDADES = [
  { label: 'Vitoria' },
  { label: 'Viana' },
  { label: 'Vila Velha' },
];

export const valoresIniciaisPesquisaProcedimentos: PesquisaProcedimentosDto = {
  termoPesquisa: '',
  especialidade: '',
  cidade: '',
  estado: '',
  avaliacao: { minimo: 0, maximo: 0 },
  precos: { minimo: 0, maximo: 0 },
};

export const ESPECIALIDADES_MEDICAS = [
  { label: 'Especialidade A', value: 'Especialidade A' },
  { label: 'Especialidade B', value: 'Especialidade B' },
  { label: 'Especialidade C', value: 'Especialidade C' },
  { label: 'Especialidade D', value: 'Especialidade D' },
  { label: 'Especialidade E', value: 'Especialidade E' },
  { label: 'Especialidade F', value: 'Especialidade F' },
  { label: 'Especialidade G', value: 'Especialidade G' },
];
