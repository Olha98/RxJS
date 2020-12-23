import React from 'react';
import { ButtonWrapper } from './ButtonStyle'

export const Button = ({ content, onClick, disabled, name }) => {
  return (
    <ButtonWrapper
      type="button"
      onClick={onClick}
      disabled={disabled}
      data-name={name}
      bgColor={!disabled ? 'none' : 'rgba(255, 255, 255, .4)'}
    >
      {content}
    </ButtonWrapper>
  );
};