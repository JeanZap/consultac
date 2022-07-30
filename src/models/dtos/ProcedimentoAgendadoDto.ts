import { AgendamentoDTO } from './AgendamentoDto';
import { ProcedimentoListadoDTO } from './Procedimentos/ProcedimentoListadoDto';

export interface ProcedimentoAgendadoDTO extends ProcedimentoListadoDTO, AgendamentoDTO {
  id: string;
}
