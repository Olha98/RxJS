import React, { useState } from 'react';
import { timer } from 'rxjs';
import { Button } from '../Button/Button';
import { Counter } from '../Counter/Counter';
import useCountTime from './hooks/useCountTime';
import { getCreateTime } from '../../common/helpers';
import styled from 'styled-components';
import planets from '../../assets/images/planets.jpg'

export const App = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const source$ = timer(currentTime, 1000);
  const [count, chanceAction] = useCountTime(setCurrentTime, source$);

  const createTime = getCreateTime(currentTime);

  return (
    <MaineWrapper>
      <WrapperContent>

      <Counter time={createTime} />
      <WrapperBtn>
        <Button
          onClick={chanceAction}
          content={count ? 'Stop' : 'Start'}
          name={count ? 'stop' : 'start'}
          disabled={false}
        />
        <Button onClick={chanceAction} name='wait' disabled={!count} content="Wait" />
        <Button onClick={chanceAction} name='reset' disabled={!count} content="Reset" />
      </WrapperBtn>
      </WrapperContent>
    </MaineWrapper>
  );
};

const MaineWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
overflow: hidden;
background-image: url(${planets});
`

const WrapperContent = styled.div`
display: flex;
flex-direction: column;
`

const WrapperBtn = styled.div`
display: flex;
justify-content: center;
`
