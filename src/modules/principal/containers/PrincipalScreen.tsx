import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ListedProcedure, Principal } from '../components/Principal';

const LISTED_PROCEDURE_MOCK: ListedProcedure[] = [
  {
    title: 'Exame exemplo',
    medic: 'Jean Pereira',
    specialization: 'Ortopedista',
    crm: '69666',
    ufCrm: 'ES',
    medicalClinic: 'Clinica Nostra',
    adress: 'Rua sorocaba, N 03 Q 37, Marcilio de Noronha, Viana',
    price: 65.56,
    priceOff: 33,
  },
  {
    title: 'Exame exemplo 2',
    medic: 'Jean Pereira',
    specialization: 'Ortopedista',
    crm: '69666',
    ufCrm: 'ES',
    medicalClinic: 'Clinica Nostra',
    adress: 'Rua sorocaba, N 03 Q 37, Marcilio de Noronha, Viana',
    price: 65.56,
    priceOff: 33,
  },
];

export const PrincipalScreen = () => {
  const navigation = useNavigation();

  return <Principal listedProcedures={LISTED_PROCEDURE_MOCK} />;
};
