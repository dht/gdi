import { useEffect, useState } from 'react';

export function useBlackBk() {
  const [hasBlack, setHasBlack] = useState(false);

  useEffect(() => {
    if (document.body.classList.contains('black')) {
      setHasBlack(true);
      return;
    }

    document.body.classList.add('black');

    return () => {
      if (hasBlack) {
        return;
      }
      document.body.classList.remove('black');
    };
  }, []);
}
