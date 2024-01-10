import { useEffect } from 'react';

const initialHeight = window.innerHeight;

let isFullscreen = false;

export function useFullscreen() {
  // Function to handle fullscreen change events

  useEffect(() => {
    document.body.classList.remove('fullscreen');

    function handleResize() {
      const delta = Math.abs(window.innerHeight - initialHeight);

      if (window.innerHeight > initialHeight && !isFullscreen) {
        isFullscreen = true;
        document.body.classList.add('fullscreen');
      }

      if (isFullscreen && delta === 0) {
        isFullscreen = false;
        document.body.classList.remove('fullscreen');
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
}
