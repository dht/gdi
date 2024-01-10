import { useEffect, useState } from 'react';
import { format } from '../../../../utils';

export function useStopwatch(status: string, tsStart: number) {
  const [duration, setDuration] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    if (status !== 'running') {
      setDuration(0);
      return;
    }
    const interval = setInterval(() => {
      setDuration(Date.now() - tsStart);
    }, 1000);

    return () => clearInterval(interval);
  }, [status, tsStart]);

  useEffect(() => {
    if (duration === 0) {
      setText('');
      return;
    }

    // format as mm:ss
    setText(format.date.stopwatch(duration));
  }, [duration]);

  return text;
}
