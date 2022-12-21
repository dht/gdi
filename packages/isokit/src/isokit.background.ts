import { logTime, logTimeEnd, scene } from './isokit.globals';
import { color4 } from './isokit.helpers';

export const initBackground = async (board: IBoard) => {
    const { backgroundType, backgroundValues } = board;
    const { color } = backgroundValues ?? {};

    logTime('initBackground');

    switch (backgroundType) {
        case 'transparent':
        case 'triangles':
            scene.clearColor = color4([0, 0, 0, 0]);
            break;
        case 'color':
            scene.clearColor = color4(color);
            break;
    }

    logTimeEnd('initBackground');
};
