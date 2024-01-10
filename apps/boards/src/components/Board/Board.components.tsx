import { Loader } from '@gdi/ui';
import { useEffect, useState } from 'react';
import { WrapperLoading } from './Board.style';

export function BoardLoading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  });

  if (!show) {
    return null;
  }

  return (
    <WrapperLoading>
      <Loader />
    </WrapperLoading>
  );
}
