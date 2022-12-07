import bucket from './json/d.bucket.events.json';
import calendar from './json/d.calendar.events.json';
import filters from './json/d.filter.events.json';
import formNewDefault from './json/d.form.events.default.json';
import formEdit from './json/d.form.events.edit.json';
import formNew from './json/d.form.events.new.json';
import gallery from './json/d.gallery.events.json';
import overlay from './json/d.overlay.events.json';
import sheet from './json/d.sheet.events.json';
import table from './json/d.table.events.json';
import timeline from './json/d.timeline.events.json';
import multiBar from './json/d.multiBar.events.json';
import { itemStructure } from './d.itemStructure.events';

export const definitions: ICrudDefinitions = {
    nodeName: 'events', // @ts-expect-error
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
