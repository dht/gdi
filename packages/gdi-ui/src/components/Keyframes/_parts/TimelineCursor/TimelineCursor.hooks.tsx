import { useEffect, useState } from 'react';
import { useSetState } from 'react-use';
import { get } from 'lodash';

type Callback = (percent: number) => void;

export function useCursor(ref: any, callback: Callback) {
  const [cursorStyle, patchCursorStyle] = useSetState({ left: 0, display: 'none' });

  useEffect(() => {
    if (!ref.current) return;

    const that = ref.current;

    function onMouseMove(event: any) {
      const isSlide = get(event, 'target.className', '').includes('slide');

      const { left } = ref.current.getBoundingClientRect();
      const cursorLeft = event.clientX - left - 5;

      patchCursorStyle({
        left: cursorLeft,
        display: isSlide ? 'block' : 'none',
      });
    }

    function onMouseEnter() {
      patchCursorStyle({
        display: 'block',
      });
    }

    function onMouseLeave() {
      patchCursorStyle({
        display: 'none',
      });
    }

    function onDoubleClick(ev: any) {
      const { width } = ref.current.getBoundingClientRect();
      const percent = ev.clientX / width;

      callback(percent);
    }

    that.addEventListener('mouseenter', onMouseEnter);
    that.addEventListener('mousemove', onMouseMove);
    that.addEventListener('mouseleave', onMouseLeave);
    that.addEventListener('dblclick', onDoubleClick);

    return () => {
      that.removeEventListener('mouseenter', onMouseEnter);
      that.removeEventListener('mousemove', onMouseMove);
      that.removeEventListener('mouseleave', onMouseLeave);
      that.removeEventListener('dblclick', onDoubleClick);
    };
  }, [ref]);

  return cursorStyle;
}
