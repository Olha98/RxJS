import React, { useState } from 'react';
import { timer } from 'rxjs';
import { Button } from '../Button/Button';
import { Counter } from '../Counter/Counter';
import useCountTime from './hooks/useCountTime';
import { getCreateTime } from '../../common/helpers';

export const App = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const source$ = timer(currentTime, 1000);
  const [count, chanceAction] = useCountTime(setCurrentTime, source$);

  const createTime = getCreateTime(currentTime);

  return (
    <div className="wrapper">
      <Counter time={createTime} />
      <div className="btn-wrapper">
        <Button
          onClick={chanceAction}
          content={count ? 'Stop' : 'Start'}
          name={count ? 'stop' : 'start'}
          disabled={false}
        />
        <Button onClick={chanceAction} name='wait' disabled={!count} content="Wait" />
        <Button onClick={chanceAction} name='reset' disabled={!count} content="Reset" />
      </div>
    </div>
  );
};
