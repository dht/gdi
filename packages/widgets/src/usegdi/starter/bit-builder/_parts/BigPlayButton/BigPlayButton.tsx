import React, { useEffect, useState } from 'react';
import { Wrapper } from './BigPlayButton.style';
import { Icon, Loader, isMobile } from '@gdi/ui';

export type BigPlayButtonProps = {
  onPlay: () => void;
};

export function BigPlayButton(props: BigPlayButtonProps) {
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const delay = isMobile() ? 2000 : 800;

    const timeout = setTimeout(() => {
      setCanPlay(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function onPlay() {
    if (!canPlay) return;

    props.onPlay();
  }

  function renderLoader() {
    return <Loader color='green' size={30} />;
  }

  function renderInner() {
    if (!canPlay) {
      return renderLoader();
    }

    return <Icon name='play_arrow' size={isMobile() ? 40 : 50} color='#aca' />;
  }

  return (
    <Wrapper className='BigPlayButton-wrapper' data-testid='BigPlayButton-wrapper' onClick={onPlay}>
      {renderInner()}
    </Wrapper>
  );
}

export default BigPlayButton;
