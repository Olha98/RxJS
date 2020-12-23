import { useEffect, useState } from 'react';

const useCountTime = ( setCurrentTime, source$ ) => {
  const [count, setCountTime] = useState(false);

  useEffect(() => {
    if (count) {
      const sub = source$.subscribe(setCurrentTime);
      return () => sub.unsubscribe();
    }
  }, [count]);
  return [count, setCountTime];
};

export default useCountTime;
