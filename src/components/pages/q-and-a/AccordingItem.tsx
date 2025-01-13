"use client"
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  fontSize?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, fontSize = '36px' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ width: '100%', margin: '10px 0' }}>
      <div
        onClick={toggle}
        style={{
          backgroundColor: '#00b0f0',
          color: 'white',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: 500,
          fontSize,
          padding: '20px',
          cursor: 'pointer',
          borderRadius: '8px',
        }}
      >
        {title}
      </div>
      {isOpen && (
        <div
          style={{
            backgroundColor: '#00b0f0',
            color: 'white',
            fontFamily: 'Rubik, sans-serif',
            fontWeight: 500,
            fontSize: '36px',
            padding: '20px',
            borderRadius: '8px',
            marginTop: '10px',
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
