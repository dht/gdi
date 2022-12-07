import bucket from './json/d.bucket.links.json';
import calendar from './json/d.calendar.links.json';
import filters from './json/d.filter.links.json';
import formNewDefault from './json/d.form.links.default.json';
import formEdit from './json/d.form.links.edit.json';
import formNew from './json/d.form.links.new.json';
import gallery from './json/d.gallery.links.json';
import overlay from './json/d.overlay.links.json';
import sheet from './json/d.sheet.links.json';
import table from './json/d.table.links.json';
import timeline from './json/d.timeline.links.json';
import multiBar from './json/d.multiBar.links.json';
import { itemStructure } from './d.itemStructure.links';

export const definitions: ICrudDefinitions = {
    nodeName: 'links', // @ts-expect-error
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
