import { ICrudDefinitions } from '@gdi/web-tables';
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
import { itemStructure } from './d.itemStructure.orders';

export const definitions: ICrudDefinitions = {
    // @ts-expect-error
    nodeName: 'orders',
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
    itemStructure,
};
