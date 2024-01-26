import React from 'react';
import {
  Analysis,
  Column,
  FallacyDescription,
  FallacyImage,
  FallacyTitle,
  Link,
  Links,
  Sentence,
  Timestamp,
  Value,
  Wrapper,
} from './YoutubeLayer.style';
import { Markdown } from '@gdi/ui';
import { markdown } from './YoutubeLayer.data';
import Timestamps from './_parts/Timestamps/Timestamps';

export type YoutubeLayerProps = {};

export function YoutubeLayer(_props: YoutubeLayerProps) {
  return (
    <Wrapper className='YoutubeLayer-wrapper' data-testid='YoutubeLayer-wrapper'>
      <Sentence>
        <Timestamps />
        <Value>"...you're saying everything will be replaced..."</Value>
      </Sentence>
      <Analysis>
        <Column>
          <FallacyImage></FallacyImage>
          <FallacyTitle></FallacyTitle>
          <FallacyDescription></FallacyDescription>
          <Links>
            <Link>More info</Link>
            <Link>Examples</Link>
          </Links>
        </Column>
        <Column>
          <Markdown mode='dark' markdown={markdown} width={480} />
        </Column>
      </Analysis>
    </Wrapper>
  );
}

export default YoutubeLayer;
