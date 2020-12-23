import React from 'react';
import styled from 'styled-components';

export const Counter = ({ time }) => {
  return (
    <Time className="time">
      <p>{time}</p>
    </Time>
  );
};

const Time = styled.div`
  & p {
    margin: 20px;
    text-align: center;
    font-family: 'Courier New';
    font-size: 7rem;
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
    z-index: 1;
  }
`;
