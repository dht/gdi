import React from 'react';
import { Wrapper } from './OnBoarding.style';
import Docs from '../Docs/Docs';

export type OnBoardingProps = {
  rootUrl: string;
  onCta: (value: string) => void;
  onCancel: () => void;
};

export function OnBoarding(props: OnBoardingProps) {
  const { rootUrl } = props;

  return (
    <Wrapper className='OnBoarding-wrapper' data-testid='OnBoarding-wrapper'>
      <Docs
        modal
        baseUrl={rootUrl}
        initialPath='what-is-gdi.md'
        showNext
        onCta={props.onCta}
        onCancel={props.onCancel}
      />
    </Wrapper>
  );
}

export default OnBoarding;
