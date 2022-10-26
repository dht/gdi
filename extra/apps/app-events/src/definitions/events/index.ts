import { ICrudDefinitions } from '@gdi/web-tables';
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
import { itemStructure } from './d.itemStructure.events';

export const definitions: ICrudDefinitions = {
    // @ts-expect-error
    nodeName: 'events',
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
