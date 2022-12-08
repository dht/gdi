import bucket from './json/d.bucket.coupons.json';
import calendar from './json/d.calendar.coupons.json';
import filters from './json/d.filter.coupons.json';
import formNewDefault from './json/d.form.coupons.default.json';
import formEdit from './json/d.form.coupons.edit.json';
import formNew from './json/d.form.coupons.new.json';
import gallery from './json/d.gallery.coupons.json';
import overlay from './json/d.overlay.coupons.json';
import sheet from './json/d.sheet.coupons.json';
import table from './json/d.table.coupons.json';
import timeline from './json/d.timeline.coupons.json';
import multiBar from './json/d.multiBar.coupons.json';
import { itemStructure } from './d.itemStructure.coupons';

export const definitions: ICrudDefinitions = {
    nodeName: 'coupons', // @ts-expect-error
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
