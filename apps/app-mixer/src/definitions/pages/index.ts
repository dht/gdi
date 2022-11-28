import bucket from './json/d.bucket.pages.json';
import calendar from './json/d.calendar.pages.json';
import filters from './json/d.filter.pages.json';
import formNewDefault from './json/d.form.pages.default.json';
import formEdit from './json/d.form.pages.edit.json';
import formNew from './json/d.form.pages.new.json';
import gallery from './json/d.gallery.pages.json';
import overlay from './json/d.overlay.pages.json';
import sheet from './json/d.sheet.pages.json';
import table from './json/d.table.pages.json';
import timeline from './json/d.timeline.pages.json';
import multiBar from './json/d.multiBar.pages.json';
import { itemStructure } from './d.itemStructure.pages';

export const definitions: ICrudDefinitions = {
    nodeName: 'pages', // @ts-expect-error
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
    bucket, // @ts-expect-error
    multiBar,
    itemStructure,
};
