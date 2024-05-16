import React from 'react';

// Header component with Save button
const Header = ({ handleSave }) => {
  return (
    <div className="header">
      <button onClick={handleSave} className="save-button">
        Save Changes
      </button>
    </div>
  );
};

export default Header;
