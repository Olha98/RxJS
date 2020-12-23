import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { of, interval, Subject, timer } from 'rxjs';
import { startWith, repeatWhen } from 'rxjs/operators';

export const App = () => {
  const [count, setCountTime] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const source$ = timer(currentTime, 1000);

  useEffect(() => {
    if (count) {
      const sub = source$.subscribe(setCurrentTime);
      return () => sub.unsubscribe();
    }
  }, [count]);

  const getCreateTime = () => {
    const createTime = new Date(currentTime * 1000).toISOString().substr(11, 8); 
    return createTime;
  };

  getCreateTime();

  const startTimer = () => {
    source$.subscribe(setCountTime(true));
  };

  const stopTimer = () => {
    source$.subscribe(setCountTime(false));
  };

  const waitTimer = () => {
    source$.subscribe(setCountTime(false));
  };

  const resetTimer = () => {
    source$.subscribe(setCurrentTime(0));
    source$.subscribe(setCountTime(false));
  };

  return (
    <div className="main-container">
      <div>{currentTime}</div>
      <button className="start" onClick={count ? stopTimer : startTimer}>
        {count ? 'Stop' : 'Start'}
      </button>
      <button className="wait" onClick={waitTimer} disabled={!count}>Wait</button>
      <button className="reset" onClick={resetTimer} disabled={!count}>Reset</button>
    </div>
  );
};

