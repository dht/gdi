import { LibraryBuilder } from '@gdi/engine';
import { initTemplates as initTemplatesGdi } from '@gdi/template-gdi';
import { initTemplates as initTemplatesBlog } from '@gdi/template-blog';

const libraryBuilder = new LibraryBuilder();

initTemplatesGdi(libraryBuilder);
initTemplatesBlog(libraryBuilder);

export const { blocks, templates } = libraryBuilder.build();
