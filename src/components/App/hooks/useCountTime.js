import { useEffect, useState } from 'react';

const useCountTime = (setCurrentTime, source$) => {
  const [count, setCountTime] = useState(false);

  useEffect(() => {
    if (count) {
      const sub = source$.subscribe(setCurrentTime);
      return () => sub.unsubscribe();
    }
  }, [count]);

  const chanceAction = e => {
    console.log(e.target.dataset.name);
    const name = e.target.dataset.name;
    switch (name) {
      case 'start':
        source$.subscribe(setCountTime(true));
        break;
      case 'stop':
        source$.subscribe(setCountTime(false));
        break;
      case 'wait':
        source$.subscribe(setCountTime(false));
        break;
      case 'reset':
        source$.subscribe(setCurrentTime(0));
        source$.subscribe(setCountTime(false));
        break;

      default:
        break;
    }
  };

  return [count, chanceAction];
};

export default useCountTime;
