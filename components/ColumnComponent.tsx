"use client"

import React from 'react';

interface ColumnComponentProps {
  id: string;
  label: string;
  onClick: (id: string) => void;
  connectedTo: string[]; 
  color: string;
}

const ColumnComponent: React.FC<ColumnComponentProps> = ({
  id,
  label,
  onClick,
  connectedTo,
  color,
}) => {

  const isConnected = Array.isArray(connectedTo) && connectedTo.length > 0;

  return (
    <div
      onClick={() => onClick(id)}
      style={{
        backgroundColor: color,
        border: '1px solid black',
        cursor: 'pointer',
        padding: '10px',
        margin: '5px',
      }}
    >
      <div>{label}</div>
      {isConnected && (
        <div style={{ fontSize: '12px', color: 'gray' }}>
          
        </div>
      )}
    </div>
  );
};

export default ColumnComponent;
