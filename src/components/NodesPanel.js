import React from 'react';
import { BiMessageRoundedDetail } from "react-icons/bi";

// Panel displaying draggable nodes
const NodesPanel = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="nodes-panel">
      <div
        className="dndnode textNode"
        onDragStart={(event) => onDragStart(event, 'textNode')}
        draggable
      >
        <div className="node-icon"><BiMessageRoundedDetail size={24} /></div>
        <div className="node-text">Message</div>
      </div>
    </div>
  );
};

export default NodesPanel;
