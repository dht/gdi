import { useEffect } from 'react';

export function useNoScroll(isMenuShown: boolean) {
  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuShown);

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuShown]);
}
