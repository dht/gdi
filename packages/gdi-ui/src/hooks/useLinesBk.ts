import { useEffect } from 'react';

export function useLinesBk() {
  useEffect(() => {
    document.body.classList.add('lines');

    return () => {
      document.body.classList.remove('lines');
    };
  }, []);
}
