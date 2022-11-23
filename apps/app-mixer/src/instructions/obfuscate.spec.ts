import { obfuscateInstructions } from './obfuscate';
import { instructions_1 } from './obfuscate.fixtures';

describe('obfuscate', () => {
    it('obfuscate instructions', () => {
        const result = obfuscateInstructions(instructions_1);
        expect(result.length).toEqual(8);
        expect(result[0].data.id).toEqual(result[1].data.pageId);
        expect(result[0].data.pageInstanceId).toEqual(result[1].data.id);
        expect(result[1].data.id).toEqual(result[2].data.pageInstanceId);
        expect(result[2].data.widgetId).toEqual(result[6].data.id);
        expect(result[2].data.id).toEqual(result[4].data.id);
    });
});
