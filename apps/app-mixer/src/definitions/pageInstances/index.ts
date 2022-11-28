import bucket from './json/d.bucket.pageInstances.json';
import calendar from './json/d.calendar.pageInstances.json';
import filters from './json/d.filter.pageInstances.json';
import formNewDefault from './json/d.form.pageInstances.default.json';
import formEdit from './json/d.form.pageInstances.edit.json';
import formNew from './json/d.form.pageInstances.new.json';
import gallery from './json/d.gallery.pageInstances.json';
import overlay from './json/d.overlay.pageInstances.json';
import sheet from './json/d.sheet.pageInstances.json';
import table from './json/d.table.pageInstances.json';
import timeline from './json/d.timeline.pageInstances.json';
import multiBar from './json/d.multiBar.pageInstances.json';
import { itemStructure } from './d.itemStructure.pageInstances';

export const definitions: ICrudDefinitions = {
    nodeName: 'pageInstances', // @ts-expect-error
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
