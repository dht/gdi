import { allVisibility } from './useTimeline';

describe.only('allVisibility', () => {
    let output;

    it('return default', () => {
        output = allVisibility(undefined, { type: 'DEFAULT' });
        expect(output).toEqual({});
    });

    it('return APPEAR', () => {
        output = allVisibility({}, { type: 'APPEAR', id: '1' });
        expect(output).toEqual({
            1: {
                isVisible: true,
            },
        });
    });

    it('return APPEAR with initialState', () => {
        output = allVisibility(
            {
                1: {
                    isVisible: true,
                },
            },
            { type: 'APPEAR', id: '2' }
        );
        expect(output).toEqual({
            1: {
                isVisible: true,
            },
            2: {
                isVisible: true,
            },
        });
    });

    it('return DISAPPEAR with initialState', () => {
        output = allVisibility(
            {
                1: {
                    isVisible: true,
                },
                2: {
                    isVisible: true,
                },
            },
            { type: 'DISAPPEAR', id: '2' }
        );
        expect(output).toEqual({
            1: {
                isVisible: true,
            },
            2: {
                isVisible: true,
                isFadingOut: true,
            },
        });
    });
});
