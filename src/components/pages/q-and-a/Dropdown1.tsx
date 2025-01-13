"use client"
import React, { useState } from 'react';

const Dropdown1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className= "toggle"style={{ position: 'absolute', top: '474px', left: '0', width: '1132px', height: '100px' }}>
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          backgroundColor: '#1E18C2',
          border: '1px solid #ccc',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={toggleDropdown}
      >
        <span>Як створити обліковий запис?</span>
        <div
          style={{
            width: '24px',
            height: '24px',
            background: '#1E18C2',
            backgroundSize: 'contain',
            cursor: 'pointer',
          }}
        ></div>
      </div>

      {isOpen && (
        <div
          style={{
            marginTop: '10px',
            padding: '20px',
            backgroundColor: '#1E18C2',
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
        >
          <p>Як створити обліковий запис? Інструкція</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown1;
