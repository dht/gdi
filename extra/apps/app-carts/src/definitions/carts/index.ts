import bucket from './json/d.bucket.carts.json';
import calendar from './json/d.calendar.carts.json';
import filters from './json/d.filter.carts.json';
import formNewDefault from './json/d.form.carts.default.json';
import formEdit from './json/d.form.carts.edit.json';
import formNew from './json/d.form.carts.new.json';
import gallery from './json/d.gallery.carts.json';
import overlay from './json/d.overlay.carts.json';
import sheet from './json/d.sheet.carts.json';
import table from './json/d.table.carts.json';
import timeline from './json/d.timeline.carts.json';
import multiBar from './json/d.multiBar.carts.json';
import { itemStructure } from './d.itemStructure.carts';

export const definitions: ICrudDefinitions = {
    nodeName: 'carts', // @ts-expect-error
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
