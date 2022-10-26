import { addListener, IsoEvent } from 'isokit';
import { eventChannel } from 'redux-saga';

export function isoEventChannel(type: IsoEvent) {
    return eventChannel((emitter) => {
        function callback(data: Json) {
            emitter(data);
        }

        const removeListener = addListener(type, callback);

        return () => {
            removeListener();
        };
    });
}
