import { initTemplates as initTemplatesGdi } from '@gdi/template-gdi';
import { initTemplates as initTemplatesBlog } from '@gdi/template-blog';
import { LibraryBuilder } from '@gdi/engine';
import * as fs from 'fs';
import { format } from 'prettier';

const run = async () => {
    console.log(
        'NOTE: make sure you re-build the template packages before running this command'
    );
    console.time('updating state');

    const libraryBuilder = new LibraryBuilder();
    initTemplatesGdi(libraryBuilder as any);
    initTemplatesBlog(libraryBuilder as any);

    const library = libraryBuilder.build();

    const saveWidgets = Object.keys(library.widgets).reduce((output, key) => {
        output[key] = library.widgets[key].info;
        return output;
    }, {} as Json);

    const fileContent = format(
        `

    export const libraryWidgets: Record<string, IWidgetInfo> = ${JSON.stringify(
        saveWidgets,
        null,
        4
    )};`,
        {
            parser: 'babel-ts',
            trailingComma: 'es5',
            tabWidth: 4,
            semi: true,
            singleQuote: true,
            jsxSingleQuote: true,
            endOfLine: 'auto',
            useTabs: false,
        }
    );

    fs.writeFileSync(
        '../../gdi-store-mixer/src/mock.libraryWidgets.ts',
        fileContent
    );

    fs.writeFileSync(
        '../../gdi-store-site/src/mock.libraryWidgets.ts',
        fileContent
    );

    console.timeEnd('updating state');
};

run();
