import { LibraryBuilder } from '@gdi/engine';
import { initTemplates } from '@gdi/template-gdi';

const libraryBuilder = new LibraryBuilder();

initTemplates(libraryBuilder);

export const { blocks, templates } = libraryBuilder.build();
