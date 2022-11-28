import bucket from './json/d.bucket.widgets.json';
import calendar from './json/d.calendar.widgets.json';
import filters from './json/d.filter.widgets.json';
import formNewDefault from './json/d.form.widgets.default.json';
import formEdit from './json/d.form.widgets.edit.json';
import formNew from './json/d.form.widgets.new.json';
import gallery from './json/d.gallery.widgets.json';
import overlay from './json/d.overlay.widgets.json';
import sheet from './json/d.sheet.widgets.json';
import table from './json/d.table.widgets.json';
import timeline from './json/d.timeline.widgets.json';
import multiBar from './json/d.multiBar.widgets.json';
import { itemStructure } from './d.itemStructure.widgets';

export const definitions: ICrudDefinitions = {
    nodeName: 'libraryWidgets', // @ts-expect-error
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
