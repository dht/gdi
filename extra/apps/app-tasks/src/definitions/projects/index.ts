import { ICrudDefinitions } from '@gdi/web-tables';
import bucket from './json/d.bucket.projects.json';
import calendar from './json/d.calendar.projects.json';
import filters from './json/d.filter.projects.json';
import formNewDefault from './json/d.form.projects.default.json';
import formEdit from './json/d.form.projects.edit.json';
import formNew from './json/d.form.projects.new.json';
import gallery from './json/d.gallery.projects.json';
import overlay from './json/d.overlay.projects.json';
import sheet from './json/d.sheet.projects.json';
import table from './json/d.table.projects.json';
import multiBar from './json/d.multiBar.projects.json';
import timeline from './json/d.timeline.projects.json';
import { itemStructure } from './d.itemStructure.projects';

export const definitions: ICrudDefinitions = {
    nodeName: 'projects', // @ts-expect-error
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
