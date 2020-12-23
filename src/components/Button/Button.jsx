import React from 'react';

export const Button = ({ content, onClick, disabled, name }) => {
  return (
    <button
      className="button"
      type="button"
      onClick={onClick}
      disabled={disabled}
      data-name={name}
    >
      {content}
    </button>
  );
};
