import React from 'react';
import { Panel, Transcript, Video, Wrapper } from './GuidanceEditor.style';
import Youtube from '../youtube/Youtube';
import VideoThumbs from '../video-thumbs/VideoThumbs';
import VideoThumbsContainer from '../video-thumbs/VideoThumbs.container';
import TranscriptContainer from '../transcript/Transcript.container';

export type GuidanceEditorProps = {};

export function GuidanceEditor(_props: GuidanceEditorProps) {
  return (
    <Wrapper className='GuidanceEditor-wrapper' data-testid='GuidanceEditor-wrapper'>
      <Video>
        <Youtube videoId='FTFaQWZBqQ8' autoSize={true} />
      </Video>
      <Panel>
        <VideoThumbsContainer />
      </Panel>
      <Transcript>
        <TranscriptContainer />
      </Transcript>
    </Wrapper>
  );
}

export default GuidanceEditor;
