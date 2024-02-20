import { useEffect } from 'react';

export function useNoScroll() {
  useEffect(() => {
    document.body.classList.toggle('no-scroll', true);

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
}
