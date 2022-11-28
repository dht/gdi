import bucket from './json/d.bucket.templates.json';
import calendar from './json/d.calendar.templates.json';
import filters from './json/d.filter.templates.json';
import formNewDefault from './json/d.form.templates.default.json';
import formEdit from './json/d.form.templates.edit.json';
import formNew from './json/d.form.templates.new.json';
import gallery from './json/d.gallery.templates.json';
import overlay from './json/d.overlay.templates.json';
import sheet from './json/d.sheet.templates.json';
import table from './json/d.table.templates.json';
import multiBar from './json/d.multiBar.templates.json';
import timeline from './json/d.timeline.templates.json';
import { itemStructure } from './d.itemStructure.templates';

export const definitions: ICrudDefinitions = {
    nodeName: 'templates', // @ts-expect-error
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
