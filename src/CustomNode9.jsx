import React, { memo } from 'react';
import { Handle } from '@xyflow/react';

function CustomNode9({ data, targetPosition, sourcePosition }) {
  // Verificar se o ID do nó é '9'
  const isResultNode = data.id === '9';

  return (
    <div className={`px-4 py-2 shadow-md rounded-md ${isResultNode ? 'bg-blue-100' : 'bg-white'} border-2 border-stone-400`}>
      <div className="flex">
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div> {/* Exibir o nome */}
        </div>
      </div>
      <p>This is a test</p>

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
