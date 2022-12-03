import { ICrudDefinitions } from '@gdi/web-tables';
import bucket from './json/d.bucket.tickets.json';
import calendar from './json/d.calendar.tickets.json';
import filters from './json/d.filter.tickets.json';
import formNewDefault from './json/d.form.tickets.default.json';
import formEdit from './json/d.form.tickets.edit.json';
import formNew from './json/d.form.tickets.new.json';
import gallery from './json/d.gallery.tickets.json';
import overlay from './json/d.overlay.tickets.json';
import sheet from './json/d.sheet.tickets.json';
import table from './json/d.table.tickets.json';
import timeline from './json/d.timeline.tickets.json';
import multiBar from './json/d.multiBar.tickets.json';
import { itemStructure } from './d.itemStructure.tickets';

export const definitions: ICrudDefinitions = {
    nodeName: 'tickets', // @ts-expect-error
    filters, // @ts-expect-error
    formEdit, // @ts-expect-error
    formNew,
    table,
    calendar, // @ts-expect-error
    gallery, // @ts-expect-error
    overlay, // @ts-expect-error
    sheet,
    timeline,
    formNewDefault,
    bucket, // @ts-expect-error
    multiBar,
    itemStructure,
};
