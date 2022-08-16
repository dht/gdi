import { useEffect, useState } from 'react';
import { ITemplates } from '../types';

export function useTemplates(libraryBuilder: ILibraryBuilder) {
    const [isReady, setIsReady] = useState(false);
    const [widgets, setWidgets] = useState<IWidgets>({});
    const [templates, setTemplates] = useState<ITemplates>({});

    useEffect(() => {
        if (!libraryBuilder) {
            return;
        }

        const library = libraryBuilder.build();

        setWidgets(library.widgets);
        setTemplates(library.templates);

        setIsReady(true);
    }, [libraryBuilder]);

    return {
        isReady,
        widgets,
        templates,
    };
}
