import React, { memo } from 'react';
import { Handle } from '@xyflow/react';

function CustomNode({ data, targetPosition, sourcePosition }) {
  // Verificar se o ID do nó é '9'
  const isResultNode = data.id === '9';

  return (
    <div className={`px-4 py-2 shadow-md rounded-md ${isResultNode ? 'bg-blue-100' : 'bg-white'} border-2 border-stone-400`}>
      <div className="flex">
        <div className="w-12 h-12 flex justify-center items-center">
          {data.emoji} {/* Exibir o ícone */}
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div> {/* Exibir o nome */}
          <div className="text-gray-500">{data.job}</div> {/* Exibir o trabalho */}
        </div>
      </div>

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

      {/* Exibir um conteúdo adicional ou estilo se for o nó '9' */}
      {isResultNode && (
        <div className="mt-2 p-2 border border-blue-300 rounded-md bg-blue-50">
          <p className="text-sm text-blue-800">This is a special result node!</p>
        </div>
      )}
    </div>
  );
}

export default memo(CustomNode);
