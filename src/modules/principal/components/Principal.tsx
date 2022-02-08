import React from 'react';
import { Text, View } from 'react-native';
import { CampoPesquisa } from '../../../shared/CampoPesquisa/CampoPesquisa';
import { ListedProcedure } from './ListedProcedure';
import * as S from './styles';

export interface ListedProcedure {
  title: string;
  medic: string;
  specialization: string;
  crm: string;
  ufCrm: string;
  medicalClinic: string;
  adress: string;
  price: number;
  priceOff: number;
}

interface PrincipalProps {
  listedProcedures: ListedProcedure[];
}

export const Principal = ({ listedProcedures }: PrincipalProps) => {
  return (
    <S.ContainerPrincipal>
      <View>
        <CampoPesquisa />
        <Text>Filtro</Text>
        {/* Pesquisar por: especilidade, local, rating, preco */}
        <Text>Filtro</Text>
      </View>
      <View>
        {listedProcedures.map(
          (
            { title, medic, specialization, crm, ufCrm, medicalClinic, price, priceOff },
            index,
          ) => (
            <ListedProcedure
              key={index}
              title={title}
              medic={medic}
              specialization={specialization}
              crm={crm}
              ufCrm={ufCrm}
              medicalClinic={medicalClinic}
              price={price}
              priceOff={priceOff}
            />
            ),
            )}
            {/*
            Ao clique:
            Marcar consulta (incluir uma agenda com horarios disponiveis), valores, 
            detalhes da clinica, detalhes do medico,*/}
      </View>
    </S.ContainerPrincipal>
  );
};
