import { analyzeWidgetId } from '.';

describe.only('analyzeWidgetId', () => {
    it('basic', () => {
        expect(
            analyzeWidgetId('com.usegdi.templates.basic.feature-simple')
        ).toEqual({});
    });
});
