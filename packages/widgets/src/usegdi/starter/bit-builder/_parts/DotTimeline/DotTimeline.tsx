import React from 'react';
import { Left, Slide, Track, Wrapper } from './DotTimeline.style';
import { dots, tracks } from './DotTimeline.data';
import { Icon } from '@gdi/ui';
import Dot from '../Dot/Dot';
import classnames from 'classnames';
import { get } from 'lodash';

export type DotTimelineProps = {
  trackId: string;
  virtualDotId: string;
  dotsExist: Json;
  callbacks: {
    onTrackClick: (trackId: string) => void;
    onDotClick: (virtualDotId: string, trackId: string) => void;
    onDotDoubleClick: (virtualDotId: string, trackId: string) => void;
    onCopy: (dotId: string, trackId: string) => void;
    onDelete: (dotId: string, trackId: string) => void;
    onPaste: (dotId: string, trackId: string) => void;
  };
};

export function DotTimeline(props: DotTimelineProps) {
  const { trackId, virtualDotId, callbacks, dotsExist } = props;

  function renderDot(dot: Json, tid: string) {
    const focused = dot.id === virtualDotId && tid === trackId;
    const dotExists = get(dotsExist, [tid, dot.id], false);

    return (
      <Dot
        key={dot.id}
        dotId={dot.id}
        trackId={tid}
        focused={focused}
        dotExists={dotExists}
        onClick={callbacks.onDotClick}
        onDoubleClick={callbacks.onDotDoubleClick}
        onDelete={callbacks.onDelete}
        onCopy={callbacks.onCopy}
        onPaste={callbacks.onPaste}
      />
    );
  }

  function renderDots(trackId: string) {
    return dots.map((dot: Json) => renderDot(dot, trackId));
  }

  function renderTrack(track: Json) {
    const { id, iconName } = track;

    const isSelected = trackId === id;

    const className = classnames({
      selected: isSelected,
    });

    return (
      <Track key={track.id} className='track'>
        <Left className={className} onClick={() => callbacks.onTrackClick(track.id)}>
          <Icon className='icon' name={iconName} />
        </Left>
        <Slide>{renderDots(track.id)}</Slide>
      </Track>
    );
  }

  function renderTracks() {
    return tracks.map((track: Json) => renderTrack(track));
  }

  return (
    <Wrapper className='DotTimeline-wrapper' data-testid='DotTimeline-wrapper'>
      {renderTracks()}
    </Wrapper>
  );
}

export default DotTimeline;
