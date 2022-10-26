import { ICrudDefinitions, ItemType } from '@gdi/web-tables';
import bucket from './json/d.bucket.ppl.json';
import calendar from './json/d.calendar.ppl.json';
import filters from './json/d.filter.ppl.json';
import formNewDefault from './json/d.form.ppl.default.json';
import formEdit from './json/d.form.ppl.edit.json';
import formNew from './json/d.form.ppl.new.json';
import gallery from './json/d.gallery.ppl.json';
import overlay from './json/d.overlay.ppl.json';
import sheet from './json/d.sheet.ppl.json';
import table from './json/d.table.ppl.json';
import timeline from './json/d.timeline.ppl.json';
import { itemStructure } from './d.itemStructure.ppl';

export const definitions: ICrudDefinitions = {
    nodeName: 'persons',
    filters,
    formEdit,
    formNew,
    table,
    calendar, // @ts-expect-error
    gallery, // @ts-expect-error
    overlay,
    sheet,
    timeline,
    formNewDefault,
    bucket,
    itemStructure,
};
