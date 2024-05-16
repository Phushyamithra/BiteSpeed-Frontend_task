import React from 'react';
import { Handle } from 'reactflow';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';

// Custom node component
const TextNode = ({ data, selected }) => {
  return (
    <div className={`text-node ${selected ? 'selected' : ''}`}>
      <Handle type="target" position="left" />
      <div className="node-header">
        <BiMessageRoundedDetail size={12} className="node-icon" />
        <span className="node-header-text">Send Message</span>
        <div className="whatsapp-icon">
          <FaWhatsapp size={10} />
        </div>
      </div>
      <div className="node-content">{data.text}</div>
      <Handle type="source" position="right" />
    </div>
  );
};

export default TextNode;
