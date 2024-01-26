import React from 'react';
import {
  Actions,
  Avatar,
  AvatarDescription,
  AvatarDetails,
  AvatarExpertise,
  AvatarName,
  Cta,
  LayerAvatar,
  Score,
  Wrapper,
} from './YoutubeLayers.style';
import { TranscriptScore } from '@gdi/ui';

export type YoutubeLayersProps = {};

export function YoutubeLayers(_props: YoutubeLayersProps) {
  return (
    <Wrapper className='YoutubeLayers-wrapper' data-testid='YoutubeLayers-wrapper'>
      <Avatar>
        <LayerAvatar />
        <AvatarDetails>
          <AvatarName>Aristotle</AvatarName>
          <AvatarExpertise>Rhetoric Expert</AvatarExpertise>
          <AvatarDescription>
            I find logical fallacies in arguments. I am a philosopher during the Classical period in
            Ancient Greece, the founder of the Lyceum and the Peripatetic school of philosophy and
            Aristotelian tradition.
          </AvatarDescription>
        </AvatarDetails>
      </Avatar>

      <Actions>
        <Cta>Change Expert</Cta>
      </Actions>

      <Score>
        <TranscriptScore />
      </Score>
    </Wrapper>
  );
}

export default YoutubeLayers;
