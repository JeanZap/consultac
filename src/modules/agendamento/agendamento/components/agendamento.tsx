import React from 'react';
import { ProcedimentoAgendadoDTO } from '../../../../models/dtos/ProcedimentoAgendadoDto';
import { CartaoMedico } from '../../../../shared/components/CartaoMedico/CartaoMedico';
import { ContainerSafeArea } from '../../../../shared/components/Container/Container';
import { Conteudo } from '../../../../shared/components/Conteudo/conteudo';
import { Subtitulo } from '../../../../shared/components/Subtitulo/subtitulo';
import { Titulo } from '../../../../shared/components/Titulo/titulo';
import { calcularDesconto } from '../../../../shared/functions';

interface AgendaConfirmarProps {
  agendamento: ProcedimentoAgendadoDTO;
}

export function Agendamento({
  agendamento: {
    titulo,
    descricao,
    medico,
    clinicaMedica,
    endereco: { logradouro, bairro, cidade, estado, complemento, referencia, numero },
    preco,
    descontoPreco,
    data,
    horario,
  },
}: AgendaConfirmarProps) {
  const exibirComplemento = !!complemento;
  const exibirReferencia = !!referencia;
  const valorDescontado = calcularDesconto(preco, descontoPreco).toFixed(2);

  return (
    <ContainerSafeArea>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>Confime os dados do agendamento</Subtitulo>
      <Conteudo>Procedimento:</Conteudo>
      <Conteudo>
        Agendamento: {data} ás {horario}
      </Conteudo>
      <Conteudo>Descricao: {descricao}</Conteudo>
      <Conteudo margem="8px 0 0 0">Endereço:</Conteudo>
      <Conteudo>Clinica: {clinicaMedica}</Conteudo>
      <Conteudo>
        {logradouro} N {numero}, {bairro} - {cidade} {estado}
      </Conteudo>
      {exibirComplemento && <Conteudo>Complemento: {complemento}</Conteudo>}
      {exibirReferencia && <Conteudo>Referência: {referencia}</Conteudo>}
      <Conteudo margem="8px 0 4px 0">Preço: </Conteudo>
      <Conteudo>Valor: R$ {preco}</Conteudo>
      <Conteudo>Desconto: {descontoPreco}%</Conteudo>
      <Conteudo margem="0 0 8px 0">Valor descontado: R$ {valorDescontado}</Conteudo>
      <CartaoMedico medico={medico} />
    </ContainerSafeArea>
  );
}
