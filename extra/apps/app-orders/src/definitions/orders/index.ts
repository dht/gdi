import bucket from './json/d.bucket.orders.json';
import calendar from './json/d.calendar.orders.json';
import filters from './json/d.filter.orders.json';
import formNewDefault from './json/d.form.orders.default.json';
import formEdit from './json/d.form.orders.edit.json';
import formNew from './json/d.form.orders.new.json';
import gallery from './json/d.gallery.orders.json';
import overlay from './json/d.overlay.orders.json';
import sheet from './json/d.sheet.orders.json';
import table from './json/d.table.orders.json';
import timeline from './json/d.timeline.orders.json';
import multiBar from './json/d.multiBar.orders.json';
import { itemStructure } from './d.itemStructure.orders';

export const definitions: ICrudDefinitions = {
    nodeName: 'orders', // @ts-expect-error
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
