import { LibraryBuilder } from '@gdi/engine';
import { initTemplate as initTemplateStarter } from '@gdi/template-starter';

const libraryBuilder = new LibraryBuilder();

initTemplateStarter(libraryBuilder);

export const { widgets, templates } = libraryBuilder.build();
