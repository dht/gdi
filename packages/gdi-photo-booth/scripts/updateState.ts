import { initTemplates as initTemplatesGdi } from '@gdi/template-gdi';
import { initTemplates as initTemplatesBlog } from '@gdi/template-blog';
import { LibraryBuilder } from '@gdi/engine';
import * as fs from 'fs';

const run = async () => {
    console.time('updating state');

    const libraryBuilder = new LibraryBuilder();
    initTemplatesGdi(libraryBuilder as any);
    initTemplatesBlog(libraryBuilder as any);

    const library = libraryBuilder.build();

    const saveBlocks = Object.keys(library.blocks).reduce((output, key) => {
        output[key] = library.blocks[key].info;
        return output;
    }, {} as Json);

    fs.writeFileSync(
        '../../gdi-store-mixer/scripts/state.libraryBlocks.ts',
        `export const libraryBlocks = ${JSON.stringify(saveBlocks, null, 4)};`
    );

    console.timeEnd('updating state');
};

run();
