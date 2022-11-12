import { ICrudDefinitions } from '@gdi/web-tables';
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
    // @ts-expect-error
    nodeName: 'sales',
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
