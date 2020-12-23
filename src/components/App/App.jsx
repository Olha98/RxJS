import React, { useState, useEffect } from 'react';
import { timer } from 'rxjs';
import { Counter } from '../Counter/Counter';
import {getCreateTime} from '../../common/helpers'
import useCountTime from './hooks/useCountTime';

export const App = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const source$ = timer(currentTime, 1000);
  const [count, setCountTime] = useCountTime(setCurrentTime, source$);

  const switchLogic = (e) => {
    const nameBtn = e.target.dataset.name;
    console.log(e.target.dataset.name);
    switch (nameBtn) {
      case "start": 
      source$.subscribe(setCountTime(true));
        break;
        case "stop": 
     source$.subscribe(setCountTime(false));
        break;
        case "wait": 
     source$.subscribe(setCountTime(false));
        break;
         case "reset": 
    source$.subscribe(setCurrentTime(0));
    source$.subscribe(setCountTime(false));
        break;
    
      default:
        break;
    }
  }



  const createTime = getCreateTime(currentTime);

  return (
    <div className="wrapper">
      <Counter time={createTime}/>
      <div className="btn-wrapper">
      <button className="start" data-name={count ? 'stop' : 'start'} onClick={switchLogic}>
        {count ? 'Stop' : 'Start'}
      </button>
      <button className="wait" data-name="wait" onClick={switchLogic} disabled={!count}>Wait</button>
      <button className="reset" data-name="reset" onClick={switchLogic} disabled={!count}>Reset</button>
      </div>
    </div>
  );
};

