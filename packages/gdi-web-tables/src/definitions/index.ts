import calendar from './json/d.calendar.images.json';
import filters from './json/d.filter.images.json';
import formNewDefault from './json/d.form.images.default.json';
import formEdit from './json/d.form.images.edit.json';
import formNew from './json/d.form.images.new.json';
import gallery from './json/d.gallery.images.json';
import overlay from './json/d.overlay.images.json';
import sheet from './json/d.sheet.images.json';
import table from './json/d.table.images.json';
import timeline from './json/d.timeline.images.json';
import { itemStructure } from './d.itemStructure.images';
import { ICrudDefinitions } from '../types';

export const definitions: ICrudDefinitions = {
    nodeName: 'libraryImages', // @ts-expect-error
    filters, // @ts-expect-error
    formEdit, // @ts-expect-error
    formNew,
    table,
    calendar, // @ts-expect-error
    gallery, // @ts-expect-error
    overlay, // @ts-expect-error
    sheet,
    timeline,
    formNewDefault,
    itemStructure,
};
