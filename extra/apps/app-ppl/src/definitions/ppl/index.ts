import bucket from './json/d.bucket.person.json';
import calendar from './json/d.calendar.person.json';
import filters from './json/d.filter.person.json';
import formNewDefault from './json/d.form.person.default.json';
import formEdit from './json/d.form.person.edit.json';
import formNew from './json/d.form.person.new.json';
import gallery from './json/d.gallery.person.json';
import overlay from './json/d.overlay.person.json';
import sheet from './json/d.sheet.person.json';
import table from './json/d.table.person.json';
import timeline from './json/d.timeline.person.json';
import multiBar from './json/d.multiBar.person.json';
import { itemStructure } from './d.itemStructure.person';

export const definitions: ICrudDefinitions = {
    nodeName: 'persons', // @ts-expect-error
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
