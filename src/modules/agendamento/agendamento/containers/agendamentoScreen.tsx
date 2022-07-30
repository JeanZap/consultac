import React from 'react';
import { PROCEDIMENTO_AGENDADO } from '../../../../constants/mocks';
import { Agendamento } from '../components/agendamento';

export function AgendamentoScreen() {
  return <Agendamento agendamento={PROCEDIMENTO_AGENDADO} />;
}
