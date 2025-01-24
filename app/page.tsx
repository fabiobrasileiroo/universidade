'use client'; 

import React, { useState } from 'react';
import ColumnComponent from '@/components/ColumnComponent';

const HomePage: React.FC = () => {
  const [colors, setColors] = useState<{ [key: string]: string }>({
    '1-1': 'white', 
    '1-2': 'white', 
    '1-3': 'white', 
    '1-4': 'white', 
    '1-5': 'white', 
    '2-1': 'white', 
    '2-2': 'white', 
    '2-3': 'white', 
    '2-4': 'white', 
    '3-1': 'white', 
    '3-2': 'white',
    '3-3': 'white',
    '3-4': 'white',
    '4-1': 'white',
    '4-2': 'white',
    '4-3': 'white',
    '4-4': 'white',
    '5-1': 'white',
    '5-2': 'white',
    '5-3': 'white',
    '5-4': 'white',
  });

  const [clickedId, setClickedId] = useState<string | null>(null);

  const [connections, setConnections] = useState<{ [key: string]: string[] }>({
'1-1': ['2-5'], 
    '1-2': ['2-5'], 
    '1-3': [], 
    '1-4': ['2-5'],
    '1-5':[],
    '2-1': ['1-5'], 
    '2-2': ['1-5'], 
    '2-3': ['1-2', '1-4'],
    '2-4': ['1-4'], 
    '2-5':['1-4'],
    '3-1': ['2-3'], 
    '3-2': ['1-1'],
    '3-3': ['2-1'],
    '3-4': ['2-1'],
    '3-5':[],
    '4-1': ['3-1'],
    '4-2': ['1-4', '2-1'],
    '4-3': [],
    '4-4': ['1-4', '3-2'],
    '4-5':[],
    '5-1': [],
    '5-2': ['2-4'],
    '5-3': ['4-4'],
    '5-4': ['2-2'],
    '5-5': ['1-5'],
    '6-1': ['1-2'],
    '6-2': ['2-3', '3-3'],
    '6-3': ['5-1'],
    '6-4': ['1-2'],
    '6-5': ['3-4'],
    '7-1': ['6-1'],
    '7-2': ['6-2'],
    '7-3': ['2-3', '6-4'],
    '7-4': ['6-5', '4-4'],
    '7-5': [],
  });

  const handleClick = (id: string) => {
    let updatedColors = { ...colors };

    if (clickedId) {
      updatedColors[clickedId] = 'white'; 
      const connectedItems = connections[clickedId];
      connectedItems.forEach((itemId) => {
        updatedColors[itemId] = 'white'; 
      });
    }

    updatedColors[id] = 'green';

    const connectedItems = connections[id];
    connectedItems.forEach((itemId) => {
      updatedColors[itemId] = 'yellow';
    });

    setColors(updatedColors);
    setClickedId(id);
  };

  const columns = [
    ['Circuitos Digitais', 'Matemática Discreta', 'Linguagens de Programação', 'Introdução à Ciência da Computação com Python I', 'Geometria Analítica'],
    ['Cálculo I', 'Álgebra Linear I', 'Estruturas de Dados', 'Introdução à Ciência da Computação com Python II', 'Laboratório de Programação Orientada a Objetos I'],
    ['Algoritmos em Grafos', 'Arquitetura de Computadores I', 'Probabilidade e Estatística', 'Cálculo II', 'Programação Funcional em Haskell'],
    ['Análise de Algoritmos', 'Métodos Numéricos I', 'Banco de Dados', 'Arquitetura de Computadores II', 'Programação Lógica'],
    ['Redes de Computadores', 'Introdução à Engenharia de Software', 'Sistemas Operacionais', 'Programação Matemática', 'Fundamentos de Computação Gráfica'],
    ['Linguagens Formais e Autômatos', 'Inteligência Artificial', 'Sistemas Distribuídos', 'Teoria dos Grafos', 'Cálculo III'],
    ['Teoria da Computação', 'Deep Learning', 'Compiladores', 'Computação Quantica', 'Metodologia da Pesquisa'],
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      gap: '20px',
      flexWrap: 'nowrap', 
      overflowX: 'auto', 
    }}>
      {columns.map((column, colIdx) => (
        <div key={colIdx} style={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '200px',
        }}>
          {column.map((label, rowIdx) => {
            const id = `${colIdx + 1}-${rowIdx + 1}`;
            return (
              <ColumnComponent
                key={id}
                id={id}
                label={label}
                onClick={handleClick}
                connectedTo={connections[id]} 
                color={colors[id]} 
              />
            );
          })}
        </div>
      ))}
    </div>
    
  );
};

export default HomePage;
