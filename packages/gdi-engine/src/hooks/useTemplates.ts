import { useMount, useSetState } from 'react-use';
import { initTemplates as initTemplatesGdi } from '@gdi/template-gdi';
import { initTemplates as initTemplatesBlog } from '@gdi/template-blog';
import { LibraryBuilder } from '../builders/LibraryBuilder';
import { useState } from 'react';
import { IBlocks, ITemplates } from '../types';
import { saveLibraryBlocks } from '../utils/debug';

export function useTemplates() {
    const [isReady, setIsReady] = useState(false);
    const [blocks, setBlocks] = useState<IBlocks>({});
    const [templates, setTemplates] = useState<ITemplates>({});

    useMount(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplatesGdi(libraryBuilder as any);
        initTemplatesBlog(libraryBuilder as any);

        const library = libraryBuilder.build();

        setBlocks(library.blocks);
        setTemplates(library.templates);

        // saveLibraryBlocks();

        setIsReady(true);
    });

    return {
        isReady,
        blocks,
        templates,
    };
}
