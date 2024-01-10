import { IBoard } from '@gdi/store-base';
import { isMobile } from '@gdi/ui';
import { get } from 'lodash';
import { useEffect } from 'react';

export function useDarkMode(board: IBoard) {
  const isDarkMode = get(board, 'mobile.darkMode');

  useEffect(() => {
    if (!isMobile()) {
      return;
    }

    document.body.classList.toggle('dark', isDarkMode);
    const grid = document.querySelector('.Grid-wrapper');

    if (grid) {
      grid.classList.toggle('dark', isDarkMode);
    }

    return () => {
      document.body.classList.remove('dark');

      if (grid) {
        grid.classList.remove('dark');
      }
    };
  }, []);
}
