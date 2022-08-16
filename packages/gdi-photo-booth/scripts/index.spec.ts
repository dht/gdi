import { analyzeWidgetId } from '.';

describe('analyzeWidgetId', () => {
    it('basic', () => {
        expect(
            analyzeWidgetId('com.usegdi.templates.basic.feature-simple')
        ).toEqual({});
    });
});
