import React from 'react';
import { Botao } from '../../../../shared/components/BotaoPrimario/BotaoPrimario';
import { ContainerSafeArea } from '../../../../shared/components/Container/Container';
import { Conteudo } from '../../../../shared/components/Conteudo/conteudo';
import { Titulo } from '../../../../shared/components/Titulo/titulo';
import { Horario } from './horario';
import * as S from './styles';

interface AgendarHoraProps {
  horarioSelecionado: string | undefined;
  horariosDisponiveis: string[];
  definirHorarioSelecionado: (horario: string) => void;
  seguirParaProxima: () => void;
}

export function AgendarHora({
  horarioSelecionado,
  horariosDisponiveis,
  definirHorarioSelecionado,
  seguirParaProxima,
}: AgendarHoraProps) {
  const proximoDesabilitado = !horarioSelecionado;

  return (
    <ContainerSafeArea>
      <Titulo>Agendamento</Titulo>
      <Conteudo>Escolha a data desejada</Conteudo>
      <S.ContainerHorarios>
        {horariosDisponiveis.map((horario) => {
          const selecionado = horario === horarioSelecionado;
          return (
            <Horario
              horario={horario}
              selecionado={selecionado}
              selecionarHorario={definirHorarioSelecionado}
            />
          );
        })}
      </S.ContainerHorarios>
      <Botao
        label={'Proximo'}
        desativado={proximoDesabilitado}
        acessar={seguirParaProxima}
      />
    </ContainerSafeArea>
  );
}
