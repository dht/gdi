import { useEffect, useState } from 'react';

export function useTemplates(libraryBuilder: ILibraryBuilder) {
    const [isReady, setIsReady] = useState(false);
    const [widgets, setWidgets] = useState<IWidgets>({});
    const [templates, setTemplates] = useState<ITemplateMetas>({});

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
