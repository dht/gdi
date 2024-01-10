import type { ITranscriptLine } from '@gdi/store-base';
import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useEffect } from 'react';
import { Transcript } from './Transcript';
import { useSpeakers } from './Transcript.hooks';
import { useSaga } from '../../../helpers/useSaga';

export type TranscriptContainerProps = {};

export function TranscriptContainer(_props: TranscriptContainerProps) {
  const transcript = useSelector(selectors.base.$transcript);
  const currentIndex = useSelector(selectors.base.$transcriptCurrentIndex);
  const dispatch = useDispatch();

  useSaga('widgets.transcript');

  const speakers = useSpeakers(transcript);

  return <Transcript sentences={transcript} speakers={speakers} currentIndex={currentIndex} />;
}

export default TranscriptContainer;
