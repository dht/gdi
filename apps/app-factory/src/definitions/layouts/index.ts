import bucket from './json/d.bucket.layouts.json';
import calendar from './json/d.calendar.layouts.json';
import filters from './json/d.filter.layouts.json';
import formNewDefault from './json/d.form.layouts.default.json';
import formEdit from './json/d.form.layouts.edit.json';
import formNew from './json/d.form.layouts.new.json';
import gallery from './json/d.gallery.layouts.json';
import overlay from './json/d.overlay.layouts.json';
import sheet from './json/d.sheet.layouts.json';
import table from './json/d.table.layouts.json';
import timeline from './json/d.timeline.layouts.json';
import multiBar from './json/d.multiBar.layouts.json';
import { itemStructure } from './d.itemStructure.layouts';

export const definitions: ICrudDefinitions = {
    nodeName: 'layouts', // @ts-expect-error
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
