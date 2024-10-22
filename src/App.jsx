import React, { useCallback } from 'react';
import { ReactFlow, useNodesState, useEdgesState, addEdge, Position } from '@xyflow/react'; // Importando Position
import { MdOutlineTaskAlt } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMdCode } from "react-icons/io";
import { FaSignsPost } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import icon from './logo.svg';
import { SiMysql } from "react-icons/si";
import '@xyflow/react/dist/style.css';
import CustomNode from './CustomNode'; 
import CustomNode9 from './CustomNode9';
const initialNodes = [
  {
    id: '1',
    type: 'custom',
    position: { x: 50, y: 50 }, // Posição inicial
    data: {
      name: 'Run',
      job: 'When new email comes!',
      emoji: <AiFillThunderbolt />, // Ícone para este nó
    },
    targetPosition: Position.Left,  // Define a posição do handle de entrada
    sourcePosition: Position.Right,  // Define a posição do handle de saída
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 350, y: 50 }, // Espaçado horizontalmente
    data: {
      name: 'Llama LLM Model',
      job: 'Reservation/Change',
      emoji: <img src={icon} alt="My Icon" width={24} height={24} />, // Ícone para este nó
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom,
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 360, y: 150 }, // Espaçado horizontalmente
    data: {
      name: 'Condition',
      job: 'Reservation/Change',
      emoji: <FaSignsPost />, // Ícone para este nó
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom,
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 500, y: 250 }, // Espaçado horizontalmente e verticalmente
    data: {
      name: 'IF True',
      job: 'Reservation',
      emoji: <IoMdCode color='green' />, // Ícone para este nó
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Right,
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 300, y: 250 }, // Espaçado horizontalmente e verticalmente
    data: {
      name: 'IF False',
      job: 'Change',
      emoji: <IoMdCode color='red' />, // Ícone para este nó
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom,
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 250, y: 360 }, // Espaçado horizontalmente
    data: {
      name: 'Pause',
      job: 'Under Construction',
      emoji: <IoIosWarning color='red' />, // Ícone para este nó
    },
    targetPosition: Position.Top,
    sourcePosition: Position.Right,
  },
  {
    id: '7',
    type: 'custom',
    position: { x: 750, y: 200 }, // Espaçado horizontalmente
    data: {
      name: 'Extract Mail Info',
      job: 'date, shift, capacity...',
      emoji: <img src={icon} alt="My Icon" width={24} height={24} />, // Ícone para este nó
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: '8',
    type: 'custom',
    position: { x: 750, y: 300 }, // Espaçado horizontalmente
    data: {
      name: 'MySQL',
      job: 'query local database',
      emoji: <SiMysql />, // Ícone para este nó
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: '9',
    type: 'custom2',
    position: { x: 1050, y: 250 },
    data: {
      name: 'Result',
      job: 'Get final results',
      emoji: <MdOutlineTaskAlt size={30} />, // Ícone
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
];

const initialEdges = [
  { id: 'e1-2', type: 'bezier', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', type: 'bezier', target: '3', animated: true },
  { id: 'e3-4', source: '3', type: 'bezier', target: '4', animated: true },
  { id: 'e3-5', source: '3', type: 'bezier', target: '5', animated: true },
  { id: 'e5-6', source: '5', type: 'bezier', target: '6', animated: true },
  { id: 'e4-7', source: '4', type: 'bezier', target: '7', animated: true },
  { id: 'e4-8', source: '4', type: 'bezier', target: '8', animated: true },
  { id: 'e7-9', source: '7', type: 'bezier', target: '9', animated: true },
  { id: 'e8-9', source: '8', type: 'bezier', target: '9', animated: true },
];

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100vw', height: '70vh' }}>
      <ReactFlow
        nodes={nodes.map((node) => ({
          ...node,
          targetPosition: node.targetPosition || Position.Left, // Usa a posição definida no nó
          sourcePosition: node.sourcePosition || Position.Right, // Usa a posição definida no nó
        }))}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={{ custom: CustomNode, custom2: CustomNode9}} 
        attributionPosition='bottom-left'
      />
    </div>
  );
};

export default App;
