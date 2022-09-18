import { analyzeWidgetId } from '.';

describe.only('analyzeWidgetId', () => {
    it('basic', () => {
        expect(
            analyzeWidgetId('com.usegdi.templates.futuristic.feature-simple')
        ).toEqual({});
    });
});
