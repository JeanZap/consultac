import { useNavigation } from '@react-navigation/native';
import { Principal } from '../components/Principal';
import React from 'react';
import { PesquisaProcedimentosDto } from '../../../models/dtos/Procedimentos/PesquisaProcedimentosDto';
import { ProcedimentoListadoDTO } from '../../../models/dtos/Procedimentos/ProcedimentoListadoDto';

const PROCEDIMENTO_LISTADO_MOCK: ProcedimentoListadoDTO[] = [
  {
    titulo: 'Exame exemplo',
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
  },
  {
    titulo: 'Exame exemplo 2',
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
  },
];

export const PrincipalScreen = () => {
  const navigation = useNavigation();

  const pesquisar = (valoresPesquisa: PesquisaProcedimentosDto) => {
    console.log(valoresPesquisa);
  };

  return (
    <Principal procedimentosListados={PROCEDIMENTO_LISTADO_MOCK} pesquisar={pesquisar} />
  );
};
