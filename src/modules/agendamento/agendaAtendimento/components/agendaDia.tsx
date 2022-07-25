import React from 'react';
import Calendar from 'react-native-calendars/src/calendar';
import { DateData } from 'react-native-calendars/src/types';
import { Botao } from '../../../../shared/components/BotaoPrimario/BotaoPrimario';
import { ContainerSafeArea } from '../../../../shared/components/Container/Container';
import { Conteudo } from '../../../../shared/components/Conteudo/conteudo';
import { Titulo } from '../../../../shared/components/Titulo/titulo';
import * as S from './styles';

interface AgendarDiaProps {
  diaSelecionado: string;
  minimoDiaPermitido: string;
  proximoDesabilitado: boolean;
  definirDiaSelecionado: (dia: DateData) => void;
  seguirParaProxima: () => void;
}

export function AgendarDia({
  diaSelecionado,
  minimoDiaPermitido,
  proximoDesabilitado,
  definirDiaSelecionado,
  seguirParaProxima,
}: AgendarDiaProps) {
  return (
    <ContainerSafeArea>
      <Titulo>Agendamento</Titulo>
      <Conteudo>Escolha a data desejada</Conteudo>
      <S.ContainerCalendario>
        <Calendar
          markedDates={{ [diaSelecionado]: { selected: true, disableTouchEvent: true } }}
          initialDate={diaSelecionado}
          minDate={minimoDiaPermitido}
          onDayPress={definirDiaSelecionado}
          monthFormat={'MMMM yyyy'}
          firstDay={1}
          disableAllTouchEventsForDisabledDays={true}
          enableSwipeMonths={true}
          theme={{
            monthTextColor: '#00adf5',
            arrowColor: '#00adf5',
            textDayFontWeight: '400',
            textMonthFontWeight: 'bold',
          }}
        />
      </S.ContainerCalendario>
      <Botao
        label={'Proximo'}
        desativado={proximoDesabilitado}
        acessar={seguirParaProxima}
      />
    </ContainerSafeArea>
  );
}
