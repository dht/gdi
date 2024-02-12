import React from 'react';
import { Actions, Gap, Nav, Tip, Wrapper } from './TubeTop.style';
import { isMobile } from '../../utils/mobile';
import DidYouKnow from '../DidYouKnow/DidYouKnow';
import TubeLogo from './_parts/TubeLogo/TubeLogo';
import BabylonLogo from './_parts/BabylonLogo/BabylonLogo';

export type TubeTopProps = {
  minimal?: boolean;
  hideTip?: boolean;
  ctaText: string;
  callbacks: {
    onLogoClick: () => void;
  };
};

export function TubeTop(props: TubeTopProps) {
  const { minimal, hideTip, ctaText, callbacks } = props;

  function renderLogo() {
    const Cmp = !minimal ? TubeLogo : BabylonLogo;
    return <Cmp onClick={callbacks.onLogoClick} />;
  }

  function renderDidYouKnow() {
    if (hideTip) return;

    return (
      <DidYouKnow>
        Gdi Videos are <span>JSONs</span> and can be easily forked, modified & versioned. When
        combined with AI, they transform into interactive experiences that{' '}
        <span>respond in real-time to user actions</span>.
      </DidYouKnow>
    );
  }

  return (
    <Wrapper className='TubeTop-wrapper' data-testid='TubeTop-wrapper'>
      <Gap />
      {renderLogo()}
      <Actions>
        <Nav onClick={callbacks.onLogoClick}>{ctaText}</Nav>
      </Actions>
      <Tip>{renderDidYouKnow()}</Tip>
    </Wrapper>
  );
}

export default TubeTop;
