import bucket from './json/d.bucket.sales.json';
import calendar from './json/d.calendar.sales.json';
import filters from './json/d.filter.sales.json';
import formNewDefault from './json/d.form.sales.default.json';
import formEdit from './json/d.form.sales.edit.json';
import formNew from './json/d.form.sales.new.json';
import gallery from './json/d.gallery.sales.json';
import overlay from './json/d.overlay.sales.json';
import sheet from './json/d.sheet.sales.json';
import table from './json/d.table.sales.json';
import multiBar from './json/d.multiBar.sales.json';
import timeline from './json/d.timeline.sales.json';
import { itemStructure } from './d.itemStructure.sales';

export const definitions: ICrudDefinitions = {
    nodeName: 'sales', // @ts-expect-error
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
