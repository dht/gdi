import { useCallback, useEffect } from 'react';

export function useFocusOn(ref: React.RefObject<HTMLDivElement>, focusOnClassName?: string) {
  useEffect(() => {
    if (!focusOnClassName) {
      return;
    }

    const unlisten = setTimeout(() => {
      if (!ref.current) {
        return;
      }

      const el: HTMLButtonElement | null = ref.current.querySelector(focusOnClassName);

      if (!el) {
        return;
      }

      el.focus();
    }, 50);
    return () => clearTimeout(unlisten);
  }, []);
}
