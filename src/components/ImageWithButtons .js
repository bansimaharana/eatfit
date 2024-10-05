import React, { useState } from 'react';

const ImageWithButtons = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count > 0 ? count - 1 : 0); // Prevent negative count
  };

  return (
    <div style={{ textAlign: 'center' }}>
      
      
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleSubtract} style={buttonStyle}>-</button>
        <span style={{ margin: '0 15px' }}>{count}</span>
        <button onClick={handleAdd} style={buttonStyle}>+</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#f0f0f0',
  cursor: 'pointer',
};

export default ImageWithButtons;

