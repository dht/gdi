import { useDispatch } from '@gdi/store-base';
import StartPlay from './StartPlay';

export type StartPlayContainerProps = {};

export function StartPlayContainer(_props: StartPlayContainerProps) {
  const dispatch = useDispatch();

  function startPlay() {
    dispatch({ type: 'PLAY' });
  }

  return <StartPlay onClick={startPlay} />;
}

export default StartPlayContainer;
