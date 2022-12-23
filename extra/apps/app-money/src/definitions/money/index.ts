import { ICrudDefinitions } from '@gdi/web-tables';
import bucket from './json/d.bucket.money.json';
import calendar from './json/d.calendar.money.json';
import filters from './json/d.filter.money.json';
import formNewDefault from './json/d.form.money.default.json';
import formEdit from './json/d.form.money.edit.json';
import formNew from './json/d.form.money.new.json';
import gallery from './json/d.gallery.money.json';
import overlay from './json/d.overlay.money.json';
import sheet from './json/d.sheet.money.json';
import table from './json/d.table.money.json';
import multiBar from './json/d.multiBar.money.json';
import timeline from './json/d.timeline.money.json';
import { itemStructure } from './d.itemStructure.money';

export const definitions: ICrudDefinitions = {
    nodeName: 'moneyLines', // @ts-expect-error
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
