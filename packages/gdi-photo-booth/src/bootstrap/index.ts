import { LibraryBuilder } from '@gdi/engine';
import { initTemplates as initTemplatesBasic } from '@gdi/template-basic';
import { initTemplates as initTemplatesMinimalist } from '@gdi/template-minimalist';
import { initTemplates as initTemplatesBlog } from '@gdi/template-blog';

const libraryBuilder = new LibraryBuilder();

initTemplatesBasic(libraryBuilder);
initTemplatesMinimalist(libraryBuilder);
initTemplatesBlog(libraryBuilder);

export const { widgets, templates } = libraryBuilder.build();
