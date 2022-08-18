import { analyzeBlockId } from '.';

describe.only('analyzeBlockId', () => {
    it('basic', () => {
        expect(
            analyzeBlockId('com.usegdi.templates.gdi.feature-simple')
        ).toEqual({});
    });
});
