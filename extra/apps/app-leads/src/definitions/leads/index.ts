import bucket from './json/d.bucket.leads.json';
import calendar from './json/d.calendar.leads.json';
import filters from './json/d.filter.leads.json';
import formNewDefault from './json/d.form.leads.default.json';
import formEdit from './json/d.form.leads.edit.json';
import formNew from './json/d.form.leads.new.json';
import gallery from './json/d.gallery.leads.json';
import overlay from './json/d.overlay.leads.json';
import sheet from './json/d.sheet.leads.json';
import table from './json/d.table.leads.json';
import multiBar from './json/d.multiBar.leads.json';
import timeline from './json/d.timeline.leads.json';
import { itemStructure } from './d.itemStructure.leads';

export const definitions: ICrudDefinitions = {
    nodeName: 'leads', // @ts-expect-error
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
