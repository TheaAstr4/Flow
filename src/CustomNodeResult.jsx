import React, { memo, useEffect, useState } from 'react';
import { Handle } from '@xyflow/react';
import axios from 'axios';

function CustomNode9({ data: nodeData, targetPosition, sourcePosition }) {
  // Verificar se o ID do nó é '9'
  const isResultNode = nodeData.id === '9';

  // Estados para armazenar dados e erro da requisição
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get('http://localhost:5000/')
        .then(response => {
          setApiData(response.data);
        })
        .catch(error => {
          setError(error.message);
        });
    }, 5000); // Requisição a cada 5 segundos
  
    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // O array vazio [] garante que useEffect será executado apenas uma vez

  return (
    <div className={`px-4 py-2 shadow-md rounded-md ${isResultNode ? 'bg-blue-100' : 'bg-white'} border-2 border-stone-400`}>
      <div className="flex">
        <div className="ml-2">
          {apiData.length > 0 ? (
            <>
              <div className="text-lg font-bold">Resultado</div>
              <div className="text-md">{apiData[0].Data}</div>
            </>
          ) : (
            <div className="text-lg">Nenhum dado disponível</div>
          )}
        </div>
      </div>
  
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>} {/* Exibe o erro, se houver */}
      
      <div className="flex justify-between">
        <Handle
          type="target"
          position={targetPosition} // Usar a posição passada como prop
          className="w-16 !bg-teal-500"
        />
      </div>
      <div className="flex justify-between mt-2">
        <Handle
          type="source"
          position={sourcePosition} // Usar a posição passada como prop
          className="w-16 !bg-teal-500"
        />
      </div>
    </div>
  );
}

export default memo(CustomNode9);
