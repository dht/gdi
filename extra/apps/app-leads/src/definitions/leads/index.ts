import { ICrudDefinitions } from '@gdi/web-tables';
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
import timeline from './json/d.timeline.leads.json';
import { itemStructure } from './d.itemStructure.leads';

export const definitions: ICrudDefinitions = {
    // @ts-expect-error
    nodeName: 'leads',
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
