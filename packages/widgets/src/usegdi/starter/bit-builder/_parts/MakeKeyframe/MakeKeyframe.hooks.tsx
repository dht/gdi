import { useEffect, useState } from 'react';

type Callback = () => void;

export function useEnter(callback: Callback, withCmd?: boolean) {
  const [isKeyDown, setIsKeyDown] = useState(false);

  useEffect(() => {
    function onKeydown(event: KeyboardEvent) {
      setIsKeyDown(false);

      if (event.key === 'Enter' && (withCmd ? event.metaKey : true)) {
        setIsKeyDown(true);
      }
    }

    function onKeyUp(_event: KeyboardEvent) {
      if (isKeyDown) {
        callback();
      }

      setIsKeyDown(false);
    }

    document.addEventListener('keydown', onKeydown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeydown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, [isKeyDown]);

  return isKeyDown;
}
