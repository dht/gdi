import { colorize } from './colorize';

describe('colorize', () => {
    it('no match', () => {
        expect(colorize('Quick actions is', 'good')).toEqual([
            {
                text: 'Quick actions is',
                isColorful: false,
            },
        ]);
    });

    it('one match: start of text', () => {
        expect(colorize('Quick actions is', 'quick')).toEqual([
            {
                text: 'Quick',
                isColorful: true,
            },
            {
                text: ' actions is',
                isColorful: false,
            },
        ]);
    });

    it('one match: middle of text', () => {
        expect(colorize('Quick actions is good', 'actions')).toEqual([
            {
                text: 'Quick ',
                isColorful: false,
            },
            {
                text: 'actions',
                isColorful: true,
            },
            {
                text: ' is good',
                isColorful: false,
            },
        ]);
    });

    it('one match: end of text', () => {
        expect(colorize('Quick actions is good', 'good')).toEqual([
            {
                text: 'Quick actions is ',
                isColorful: false,
            },
            {
                text: 'good',
                isColorful: true,
            },
        ]);
    });

    it('two matches: all around', () => {
        expect(
            colorize(
                'Good quick actions are good and slow actions are also quite good',
                'good'
            )
        ).toEqual([
            {
                text: 'Good',
                isColorful: true,
            },
            {
                text: ' quick actions are ',
                isColorful: false,
            },
            {
                text: 'good',
                isColorful: true,
            },
            {
                text: ' and slow actions are also quite ',
                isColorful: false,
            },
            {
                text: 'good',
                isColorful: true,
            },
        ]);
    });
});
