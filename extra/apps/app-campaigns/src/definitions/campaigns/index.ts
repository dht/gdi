import bucket from './json/d.bucket.campaigns.json';
import calendar from './json/d.calendar.campaigns.json';
import filters from './json/d.filter.campaigns.json';
import formNewDefault from './json/d.form.campaigns.default.json';
import formEdit from './json/d.form.campaigns.edit.json';
import formNew from './json/d.form.campaigns.new.json';
import gallery from './json/d.gallery.campaigns.json';
import overlay from './json/d.overlay.campaigns.json';
import sheet from './json/d.sheet.campaigns.json';
import table from './json/d.table.campaigns.json';
import timeline from './json/d.timeline.campaigns.json';
import { itemStructure } from './d.itemStructure.campaigns';

export const definitions: ICrudDefinitions = {
    nodeName: 'campaigns', // @ts-expect-error
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
    bucket,
    itemStructure,
};
