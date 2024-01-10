import { useEffect } from 'react';

export function useBlackBk() {
  useEffect(() => {
    document.body.classList.add('black');

    return () => {
      document.body.classList.remove('black');
    };
  }, []);
}
