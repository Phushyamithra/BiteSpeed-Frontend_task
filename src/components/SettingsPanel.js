import React from 'react';
import { IoMdArrowBack } from "react-icons/io";

// Panel for editing node settings
const SettingsPanel = ({ selectedNode, setSelectedNode, onNodeDataChange }) => {
  const handleChange = (event) => {
    const updatedData = { ...selectedNode.data, text: event.target.value };
    onNodeDataChange(selectedNode.id, updatedData);
  };

  const saveChanges = () => {
    setSelectedNode(null); // Switch back to Nodes Panel after saving
  };

  return (
    <div >
      <div className="settings-header">
        <IoMdArrowBack onClick={saveChanges} className="back-button"/>
        <span className="message-heading">Message</span>
      </div>
      <hr />

      <div className="settings-panel">
        <h4 className="text-heading">Text</h4>
        <textarea
          className="settings-textarea"
          value={selectedNode.data.text}
          onChange={handleChange}
        />
      </div>
      <hr />
    </div>
  );
};

export default SettingsPanel;
