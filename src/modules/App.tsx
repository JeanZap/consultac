import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Colors } from '../constants/colors';
import { ITema } from '../models/ITema';
import { Navigator } from '../navigation';

export const App = () => {
  const tema: ITema = {
    fonte: {
      cor: {
        cinza1: Colors.gray1,
        cinza2: Colors.gray2,
      },
      metricas: {
        titulo: 24,
        subtitulo: 20,
        conteudo: 16,
        pequeno: 12,
      },
      pesos: { titulo: 700, conteudo: 500 },
    },
  };

  return (
    <ThemeProvider theme={tema}>
      <Navigator />
    </ThemeProvider>
  );
};
