import React from 'react';
import { Animation, Id, P, Wrapper } from './IssueSubmitted.style';
import { Lottie } from '@gdi/ui';

export type IssueSubmittedProps = {
  id: string;
};

export function IssueSubmitted(props: IssueSubmittedProps) {
  const { id = '' } = props;

  return (
    <Wrapper
      className='IssueSubmitted-wrapper'
      data-testid='IssueSubmitted-wrapper'
    >
      <Animation>
        <Lottie
          url='https://raw.githubusercontent.com/dht/gdi-assets/main/lottie/thank-you.json'
          size={530}
        />
      </Animation>
      <Id>Issue #{id.substring(0, 4)}</Id>
      <P>
        You can track the progress of the issues on the project's{' '}
        <a href='https://github.com/dht/gdi/issues' target='_blank'>
          GitHub page
        </a>
        . Updates will be posted daily after our team reviews the new issues.
      </P>
    </Wrapper>
  );
}

export default IssueSubmitted;
