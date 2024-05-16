import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import RightPanel from './RightPanel';
import Header from './Header';
import TextNode from './TextNode';
import '../index.css';  // Import the CSS file

const initialNodes = [];

const nodeTypes = {
  textNode: TextNode,
};

const FlowBuilder = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [error, setError] = useState("");

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (params) => {
      const hasOutgoingEdge = edges.some((edge) => edge.source === params.source);

      if (hasOutgoingEdge) {
        setError("Cannot connect: Node already has an outgoing edge.");
        setTimeout(() => setError(""), 3000); // Clear error after 3 seconds
        return;
      }

      setEdges((eds) => addEdge({ ...params, markerEnd: { type: 'arrowclosed' } }, eds));
    },
    [edges]
  );

  const handleNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const handleSave = () => {
    const nodesWithEmptyTargets = nodes.filter((node) => {
      const connectedEdges = edges.filter((edge) => edge.source === node.id);
      return connectedEdges.length === 0;
    });

    if (nodes.length > 1 && nodesWithEmptyTargets.length > 1) {
      setError("Cannot save Flow");
      setTimeout(() => setError(""), 3000); // Clear error after 3 seconds
    } else {
      // Save logic here
      console.log('Flow saved:', nodes, edges);
      setSelectedNode(null); // Switch back to Nodes Panel
      setError(""); // Clear error
    }
  };

  const { project } = useReactFlow();

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = event.target.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');

    if (typeof type === 'undefined' || !type) {
      return;
    }

    const position = project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: (Math.random() * 1000).toString(),
      type,
      position,
      data: { text: `test message ${nodes.length + 1}` },
    };

    setNodes((nds) => nds.concat(newNode));
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const handleNodeDataChange = (nodeId, newData) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId ? { ...node, data: newData } : node
      )
    );
    setSelectedNode((node) =>
      node.id === nodeId ? { ...node, data: newData } : node
    );
  };

  return (
    <div className="flow-builder">
      <Header handleSave={handleSave} />
      {error && <div className="error-message">{error}</div>}
      <div className="flow-content">
        <div
          className="reactflow-wrapper"
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <ReactFlow
            nodes={nodes.map(node => ({ ...node, data: { ...node.data, selected: node.id === selectedNode?.id } }))}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={handleNodeClick}
            nodeTypes={nodeTypes}
          >
            <Controls />
          </ReactFlow>
        </div>
        <RightPanel
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
          onNodeDataChange={handleNodeDataChange}
          handleSave={handleSave}
        />
      </div>
    </div>
  );
};

export default FlowBuilder;
