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
import CustomNodeResult from './CustomNodeResult';
import CustomNodeAgent1 from './CustomNodeAgent1';
import CustomNodeSQL from './CustomNodeSQL';
import CustomNodeMail from './CustomNodeMail';

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
    sourcePosition: Position.Right,
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 200, y: 180 }, // Espaçado horizontalmente
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
    position: { x: 300, y: 300 }, // Espaçado horizontalmente e verticalmente
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
    position: { x: 100, y: 300 }, // Espaçado horizontalmente e verticalmente
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
    position: { x: 50, y: 400 }, // Espaçado horizontalmente
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
    position: { x: 550, y: 300 }, // Espaçado horizontalmente
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
    position: { x: 550, y: 400 }, // Espaçado horizontalmente
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
    position: { x: 900, y: 350 },
    data: {
      name: 'Result',
      job: 'Get final results',
      emoji: <MdOutlineTaskAlt size={30} />, // Ícone
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: '10',
    type: 'custom1',
    position: { x: 700, y: 50 },
    data: {
      name: 'Result',
      job: 'Get final results',
      emoji: <MdOutlineTaskAlt size={30} />, // Ícone
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: '11',
    type: 'custom3',
    position: { x: 900, y: 500 },
    data: {
      name: 'Result',
      job: 'Get final results',
      emoji: <MdOutlineTaskAlt size={30} />, // Ícone
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: '12',
    type: 'custom4',
    position: { x: 900, y: 200 },
    data: {
      name: 'Result',
      job: 'Get final results',
      emoji: <MdOutlineTaskAlt size={30} />, // Ícone
      style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 200, height: 200 }
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
];

const initialEdges = [
  { id: 'e1-2', type: 'bezier', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', type: 'default', target: '3', animated: true },
  { id: 'e3-4', source: '3', type: 'default', target: '4', animated: true },
  { id: 'e3-5', source: '3', type: 'default', target: '5', animated: true },
  { id: 'e5-6', source: '5', type: 'default', target: '6', animated: true },
  { id: 'e4-7', source: '4', type: 'default', target: '7', animated: true },
  { id: 'e4-8', source: '4', type: 'default', target: '8', animated: true },
  { id: 'e7-9', source: '7', type: 'default', target: '9', animated: true },
  { id: 'e8-9', source: '8', type: 'default', target: '9', animated: true },
  { id: 'e8-10', source: '2', type: 'default', target: '10', animated: true },
  { id: 'e8-11', source: '8', type: 'default', target: '11', animated: true },
  { id: 'e8-12', source: '7', type: 'default', target: '12', animated: true },
];

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
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
        nodeTypes={{ custom: CustomNode,
          custom2: CustomNodeResult,
          custom1: CustomNodeAgent1,
          custom3: CustomNodeSQL,
          custom4: CustomNodeMail}} 
        attributionPosition='bottom-left'
      />
    </div>
  );
};

export default App;
