import React from 'react';
import { ScrollView } from 'react-native';
import { ProcedimentoListadoDTO } from '../../../models/dtos/Procedimentos/ProcedimentoListadoDto';
import { Botao } from '../../../shared/components/BotaoPrimario/BotaoPrimario';
import { CartaoMedico } from '../../../shared/components/CartaoMedico/CartaoMedico';
import { Conteudo } from '../../../shared/components/Conteudo/conteudo';
import { Subtitulo } from '../../../shared/components/Subtitulo/subtitulo';
import { Titulo } from '../../../shared/components/Titulo/titulo';
import * as S from './styles';

interface DetalhesProcedimentoProps {
  procedimento: ProcedimentoListadoDTO;
  iniciarAgendamento: () => void;
}

export const DetalhesProcedimento = ({
  procedimento: {
    titulo,
    descricao,
    medico,
    clinicaMedica,
    endereco: { logradouro, bairro, cidade, estado, complemento, referencia, numero },
    preco,
    descontoPreco,
  },
  iniciarAgendamento,
}: DetalhesProcedimentoProps) => {
  const exibirComplemento = !!complemento;
  const exibirReferencia = !!referencia;

  return (
    <S.ContainerPrincipal>
      <ScrollView>
        <Titulo>{titulo}</Titulo>
        <Subtitulo>{clinicaMedica}</Subtitulo>
        <Conteudo>Descricao: {descricao}</Conteudo>
        <Conteudo>
          Endereço: {logradouro} N {numero}, {bairro} - {cidade} {estado}
        </Conteudo>
        {exibirComplemento && <Conteudo>Complemento: {complemento}</Conteudo>}
        {exibirReferencia && <Conteudo>Referência: {referencia}</Conteudo>}
        <Conteudo margem="0 0 8px 0">
          Preço: R$ {preco} {descontoPreco}%
        </Conteudo>
        <CartaoMedico medico={medico} />
        <Botao label="Agendar" margem="16px 0" acessar={iniciarAgendamento} />
      </ScrollView>
    </S.ContainerPrincipal>
  );
};
