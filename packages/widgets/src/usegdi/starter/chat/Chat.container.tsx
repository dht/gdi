import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { Chat } from './Chat';
import { useSpeakers } from '../transcript/Transcript.hooks';

export type ChatContainerProps = {};

export function ChatContainer(_props: ChatContainerProps) {
  const transcript = useSelector(selectors.base.$transcript);
  const currentIndex = useSelector(selectors.base.$transcriptCurrentIndex);
  const dispatch = useDispatch();

  const speakers = useSpeakers(transcript);

  return <Chat sentences={transcript} speakers={speakers} currentIndex={currentIndex} />;
}

export default ChatContainer;
