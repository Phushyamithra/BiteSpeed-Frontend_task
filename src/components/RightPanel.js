import React from 'react';
import NodesPanel from './NodesPanel';
import SettingsPanel from './SettingsPanel';

// Panel displaying nodes or settings based on selection
const RightPanel = ({ selectedNode, setSelectedNode, onNodeDataChange }) => {
  return (
    <div className="right-panel">
      {selectedNode ? (
        <SettingsPanel
          selectedNode={selectedNode}
          onNodeDataChange={onNodeDataChange}
          setSelectedNode={setSelectedNode}
        />
      ) : (
        <NodesPanel />
      )}
    </div>
  );
};

export default RightPanel;
