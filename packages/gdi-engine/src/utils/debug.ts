import { LibraryBuilder } from '../builders/LibraryBuilder';
import { initTemplates as initTemplatesGdi } from '@gdi/template-gdi';
import { initTemplates as initTemplatesBlog } from '@gdi/template-blog';

export const saveLibraryBlocks = () => {
    const libraryBuilder = new LibraryBuilder();
    initTemplatesGdi(libraryBuilder as any);
    initTemplatesBlog(libraryBuilder as any);

    const library = libraryBuilder.build();

    const saveBlocks = Object.keys(library.blocks).reduce((output, key) => {
        output[key] = library.blocks[key].info;
        return output;
    }, {} as Json);

    console.log('saveBlocks ->', saveBlocks);

    fetch('http://localhost:3003/saveLibraryBlocks', {
        method: 'POST',
        body: JSON.stringify(saveBlocks),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
