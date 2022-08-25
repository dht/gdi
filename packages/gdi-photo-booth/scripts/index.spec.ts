import { analyzeBlockId } from '.';

describe.only('analyzeBlockId', () => {
    it('basic', () => {
        expect(
            analyzeBlockId('com.usegdi.templates.futuristic.feature-simple')
        ).toEqual({});
    });
});
