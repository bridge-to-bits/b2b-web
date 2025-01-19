"use client"
import React, { useState } from 'react';

const Dropdown: React.FC = () => {
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
        <span>Що таке Bridge to Beats?</span>
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
          <p>Beat to Beat – це онлайн-платформа для музикантів та продюсерів, створена для того, щоб спростити процес пошуку ідеальних партнерів для спільної роботи. Наша місія – об’єднувати музичні таланти для спільного створення нових треків і проєктів.</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
