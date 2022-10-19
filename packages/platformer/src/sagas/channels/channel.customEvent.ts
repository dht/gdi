import { addListener } from 'shared-base';
import { eventChannel } from 'redux-saga';

export function customEventChannel(type: string) {
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
