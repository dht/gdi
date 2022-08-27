import { useEffect, useState } from 'react';
import { IBlocks, ITemplates } from '../types';

export function useTemplates(libraryBuilder: ILibraryBuilder) {
    const [isReady, setIsReady] = useState(false);
    const [blocks, setBlocks] = useState<IBlocks>({});
    const [templates, setTemplates] = useState<ITemplates>({});

    useEffect(() => {
        if (!libraryBuilder) {
            return;
        }

        const library = libraryBuilder.build();

        setBlocks(library.blocks);
        setTemplates(library.templates);

        setIsReady(true);
    }, [libraryBuilder]);

    return {
        isReady,
        blocks,
        templates,
    };
}
