import { eventChannel } from 'redux-saga';

export function createMouseClickChannel() {
  return eventChannel((emit) => {
    const handler = (event: any) => emit(event);
    window.addEventListener('click', handler);

    const unsubscribe = () => {
      window.removeEventListener('click', handler);
    };

    return unsubscribe;
  });
}
