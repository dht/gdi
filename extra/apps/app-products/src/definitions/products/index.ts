import { ICrudDefinitions } from '@gdi/web-tables';
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
    // @ts-expect-error
    nodeName: 'products',
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
