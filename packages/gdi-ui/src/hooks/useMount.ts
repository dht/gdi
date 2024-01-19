import { useEffect } from 'react';

type Callback = () => void;

export function useMount(callback: Callback, delay: number = 0) {
  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, []);
}
