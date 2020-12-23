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

    console.log(count, 'count');
  }, [count]);

  const getCreateTime = () => {
    console.log('getCreateTime');
    const createTime = new Date(currentTime * 1000).toISOString().substr(11, 8); 
    console.log(createTime, 'createTime');
    return createTime;
  };

  getCreateTime();

  const startTimer = () => {
    console.log('startTimer');
    source$.subscribe(setCountTime(true));
  };

  const stopTimer = () => {
    console.log('stopTimer');
    source$.subscribe(setCountTime(false));
  };

  const waitTimer = () => {
    console.log('waitTimer');
    source$.subscribe(setCountTime(false));
  };

  const resetTimer = () => {
    console.log('resetTimer');
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

