import { ICrudDefinitions } from '@gdi/web-tables';
import bucket from './json/d.bucket.comments.json';
import calendar from './json/d.calendar.comments.json';
import filters from './json/d.filter.comments.json';
import formNewDefault from './json/d.form.comments.default.json';
import formEdit from './json/d.form.comments.edit.json';
import formNew from './json/d.form.comments.new.json';
import gallery from './json/d.gallery.comments.json';
import overlay from './json/d.overlay.comments.json';
import sheet from './json/d.sheet.comments.json';
import table from './json/d.table.comments.json';
import timeline from './json/d.timeline.comments.json';
import { itemStructure } from './d.itemStructure.comments';

export const definitions: ICrudDefinitions = {
    // @ts-expect-error
    nodeName: 'comments',
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
