import React from 'react';
import { ProcedimentoAgendadoDTO } from '../../../../models/dtos/ProcedimentoAgendadoDto';
import { ContainerSafeArea } from '../../../../shared/components/Container/Container';
import { Conteudo } from '../../../../shared/components/Conteudo/conteudo';
import { Subtitulo } from '../../../../shared/components/Subtitulo/subtitulo';
import { Titulo } from '../../../../shared/components/Titulo/titulo';
import * as S from './styles';

interface AtendimentoAgendadosProps {
  agendamentos: ProcedimentoAgendadoDTO[];
  irParaProcedimento: (id: string) => void;
}

export function AtendimentosAgendados({
  agendamentos,
  irParaProcedimento: irParaProcedimentoProps,
}: AtendimentoAgendadosProps) {
  const irParaProcedimento = (id: string) => () => irParaProcedimentoProps(id);

  return (
    <ContainerSafeArea>
      <Titulo>Agendamentos realizado</Titulo>
      <Conteudo>Visualize seus agendamentos realizados</Conteudo>
      <S.ContainerScroll>
        {agendamentos.map(({ titulo, clinicaMedica, data, id }) => (
          <S.ContainerAgendamento key={id} onPress={irParaProcedimento(id)}>
            <>
              <Subtitulo margem="0">Proc.: {titulo}</Subtitulo>
              <Conteudo>Local: {clinicaMedica}</Conteudo>
              <Conteudo>Data: {data}</Conteudo>
            </>
          </S.ContainerAgendamento>
        ))}
      </S.ContainerScroll>
    </ContainerSafeArea>
  );
}
