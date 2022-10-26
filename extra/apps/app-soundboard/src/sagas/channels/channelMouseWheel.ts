import { eventChannel } from 'redux-saga';

export function createMouseWheelChannel() {
    return eventChannel((emitter) => {
        document.addEventListener('wheel', emitter);

        return () => {
            document.removeEventListener('wheel', emitter);
        };
    });
}
