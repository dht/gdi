import bucket from './json/d.bucket.products.json';
import calendar from './json/d.calendar.products.json';
import filters from './json/d.filter.products.json';
import formNewDefault from './json/d.form.products.default.json';
import formEdit from './json/d.form.products.edit.json';
import formNew from './json/d.form.products.new.json';
import gallery from './json/d.gallery.products.json';
import overlay from './json/d.overlay.products.json';
import sheet from './json/d.sheet.products.json';
import table from './json/d.table.products.json';
import multiBar from './json/d.multiBar.products.json';
import timeline from './json/d.timeline.products.json';
import { itemStructure } from './d.itemStructure.products';

export const definitions: ICrudDefinitions = {
    nodeName: 'products', // @ts-expect-error
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
