import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "/* command */" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "/* comment */" } },
  { id: "3", position: { x: 100, y: 100 }, data: { label: "NODE 1" } },
  { id: "4", position: { x: 150, y: 100 }, data: { label: "NODE 2" } },
  { id: "5", position: { x: 0, y: 100 }, data: { label: "/* comment2 */" } },
  { id: "6", position: { x: 110, y: 100 }, data: { label: "NODE 3" } },
  { id: "7", position: { x: 220, y: 100 }, data: { label: "NODE 4" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "75vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
