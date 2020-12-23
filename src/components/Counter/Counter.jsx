import React from 'react';
import { Time } from './CounterStyle';

export const Counter = ({ time }) => {
  return (
    <Time>
      <p>{time}</p>
    </Time>
  );
};
