import React from 'react';
import { Text, View } from 'react-native';
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
        <Text>Filtro por nome</Text>
        <Text>Filtro</Text>
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
      </View>
    </S.ContainerPrincipal>
  );
};
