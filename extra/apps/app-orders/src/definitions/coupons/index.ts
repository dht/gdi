import { ICrudDefinitions } from '@gdi/web-tables';
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
    // @ts-expect-error
    nodeName: 'coupons',
    filters,
    formEdit,
    formNew,
    table,
    calendar,
    gallery,
    overlay,
    sheet,
    timeline,
    formNewDefault,
    bucket,
    multiBar,
    itemStructure,
};
