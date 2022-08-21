import { useMount, useSetState } from 'react-use';
import { initTemplates } from '@gdi/template-gdi';
import { LibraryBuilder } from '../builders/LibraryBuilder';
import { useState } from 'react';
import { IBlocks, ITemplates } from '../types';

export function useTemplates() {
    const [isReady, setIsReady] = useState(false);
    const [blocks, setBlocks] = useState<IBlocks>({});
    const [templates, setTemplates] = useState<ITemplates>({});

    useMount(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplates(libraryBuilder as any);

        const library = libraryBuilder.build();

        setBlocks(library.blocks);
        setTemplates(library.templates);

        setIsReady(true);
    });

    return {
        isReady,
        blocks,
        templates,
    };
}
