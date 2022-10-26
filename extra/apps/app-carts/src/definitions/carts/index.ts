import { ICrudDefinitions } from '@gdi/web-tables';
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
import { itemStructure } from './d.itemStructure.carts';

export const definitions: ICrudDefinitions = {
    // @ts-expect-error
    nodeName: 'carts',
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
