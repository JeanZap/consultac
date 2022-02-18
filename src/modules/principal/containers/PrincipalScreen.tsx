import { useNavigation } from '@react-navigation/native';
import { Principal, ProcedimentoListadoDTO } from '../components/Principal';
import React from 'react';

const PROCEDIMENTO_LISTADO_MOCK: ProcedimentoListadoDTO[] = [
  {
    titulo: 'Exame exemplo',
    medico: 'Jean Pereira',
    especializacao: 'Ortopedista',
    crm: '69666',
    ufCrm: 'ES',
    clinicaMedica: 'Clinica Nostra',
    endereco: 'Rua sorocaba, N 03 Q 37, Marcilio de Noronha, Viana',
    preco: 65.56,
    descontoPreco: 33,
  },
  {
    titulo: 'Exame exemplo 2',
    medico: 'Jean Pereira',
    especializacao: 'Ortopedista',
    crm: '69666',
    ufCrm: 'ES',
    clinicaMedica: 'Clinica Nostra',
    endereco: 'Rua sorocaba, N 03 Q 37, Marcilio de Noronha, Viana',
    preco: 65.56,
    descontoPreco: 33,
  },
];

export const PrincipalScreen = () => {
  const navigation = useNavigation();

  const pesquisar = () => {};

  return (
    <Principal procedimentosListados={PROCEDIMENTO_LISTADO_MOCK} pesquisar={pesquisar} />
  );
};
