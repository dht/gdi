import { durationToMinutes } from './language.time';

describe('durationToMinutes', () => {
    it('minutes', () => {
        expect(durationToMinutes('20m')).toEqual(20);
        expect(durationToMinutes('30m')).toEqual(30);
    });

    it('hours', () => {
        expect(durationToMinutes('4h')).toEqual(4 * 60);
        expect(durationToMinutes('3hr')).toEqual(3 * 60);
    });

    it('days', () => {
        expect(durationToMinutes('4d')).toEqual(4 * 24 * 60);
        expect(durationToMinutes('4dy')).toEqual(4 * 24 * 60);
    });

    it('weeks', () => {
        expect(durationToMinutes('5w')).toEqual(5 * 7 * 24 * 60);
        expect(durationToMinutes('5wk')).toEqual(5 * 7 * 24 * 60);
    });

    it('months', () => {
        expect(durationToMinutes('2M')).toEqual(2 * 30 * 24 * 60);
    });

    it('years', () => {
        expect(durationToMinutes('5w')).toEqual(5 * 7 * 24 * 60);
    });

    it('mixes', () => {
        expect(durationToMinutes('1yr 4w 5d 2h 30m')).toEqual(
            1 * 365 * 24 * 60 + 4 * 7 * 24 * 60 + 5 * 24 * 60 + 2 * 60 + 30
        );
    });
});
