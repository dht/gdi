import bucket from './json/d.bucket.articles.json';
import calendar from './json/d.calendar.articles.json';
import filters from './json/d.filter.articles.json';
import formNewDefault from './json/d.form.articles.default.json';
import formEdit from './json/d.form.articles.edit.json';
import formNew from './json/d.form.articles.new.json';
import gallery from './json/d.gallery.articles.json';
import overlay from './json/d.overlay.articles.json';
import sheet from './json/d.sheet.articles.json';
import table from './json/d.table.articles.json';
import timeline from './json/d.timeline.articles.json';
import multiBar from './json/d.multiBar.articles.json';
import { itemStructure } from './d.itemStructure.articles';

export const definitions: ICrudDefinitions = {
    nodeName: 'articles', // @ts-expect-error
    filters, // @ts-expect-error
    formEdit, // @ts-expect-error
    formNew,
    table,
    calendar, // @ts-expect-error
    gallery, // @ts-expect-error
    overlay, // @ts-expect-error
    sheet,
    timeline,
    formNewDefault, // @ts-expect-error
    bucket,
    itemStructure, // @ts-expect-error
    multiBar,
};
