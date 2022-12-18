import { ICrudDefinitions, ItemType } from '@gdi/web-tables';
import bucket from './json/d.calendar.inbox.json';
import calendar from './json/d.calendar.inbox.json';
import filters from './json/d.filter.inbox.json';
import formNewDefault from './json/d.form.inbox.default.json';
import formEdit from './json/d.form.inbox.edit.json';
import formNew from './json/d.form.inbox.new.json';
import gallery from './json/d.gallery.inbox.json';
import overlay from './json/d.overlay.inbox.json';
import sheet from './json/d.sheet.inbox.json';
import table from './json/d.table.inbox.json';
import timeline from './json/d.timeline.inbox.json';
import multiBar from './json/d.multiBar.inbox.json';
import { itemStructure } from './d.itemStructure.inbox';

export const definitionType: ItemType = 'inbox';

export const definitions: ICrudDefinitions = {
    nodeName: 'inboxMessages', // @ts-expect-error
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
    itemStructure, // @ts-expect-error
    multiBar,
};
