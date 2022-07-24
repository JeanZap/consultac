import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { HORARIOS_DISPONIVEIS_MOCK } from '../../../../constants/mocks';
import { MainRoutes } from '../../../../navigation/routes/main.routes';
import { AgendarHora } from '../components/agendarHora';

export function AgendarHoraScreen() {
  const navigation = useNavigation();

  const [horarioSelecionado, setHorarioSelecionado] = useState<string>();

  const definirHorarioSelecionado = (horario: string) => setHorarioSelecionado(horario);

  const seguirParaProxima = () =>
    navigation.navigate('main', { screen: MainRoutes.Pagamento });

  return (
    <AgendarHora
      horarioSelecionado={horarioSelecionado}
      horariosDisponiveis={HORARIOS_DISPONIVEIS_MOCK}
      definirHorarioSelecionado={definirHorarioSelecionado}
      seguirParaProxima={seguirParaProxima}
    />
  );
}
