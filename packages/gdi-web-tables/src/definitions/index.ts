import { filters } from './filters';
import { formsEdit, formsNew, formsNewDefault } from './forms';
import { tables } from './tables';
import { galleries } from './galleries';
import { timelines } from './timelines';
import { calendars } from './calendars';
import { ICrudDefinitions } from '../types';

export const definitions: Record<string, ICrudDefinitions> = {
    article: {
        filters: filters.article,
        formNew: formsNew.article,
        formNewDefault: formsNewDefault.article,
        formEdit: formsEdit.article,
        table: tables.article,
        gallery: galleries.article,
        calendar: calendars.article,
        timeline: timelines.article,
    },
    event: {
        filters: filters.event,
        formNew: formsNew.event,
        formNewDefault: formsNewDefault.event,
        formEdit: formsEdit.event,
        table: tables.event,
        gallery: galleries.event,
        calendar: calendars.event,
        timeline: timelines.event,
    },
    image: {
        filters: filters.image,
        formNew: formsNew.image,
        formNewDefault: formsNewDefault.image,
        formEdit: formsEdit.image,
        table: tables.image,
        gallery: galleries.image,
        calendar: calendars.image,
        timeline: timelines.image,
    },
    layout: {
        filters: filters.layout,
        formNew: formsNew.layout,
        formNewDefault: formsNewDefault.layout,
        formEdit: formsEdit.layout,
        table: tables.layout,
        gallery: galleries.layout,
        calendar: calendars.layout,
        timeline: timelines.layout,
    },
    post: {
        filters: filters.post,
        formNew: formsNew.post,
        formNewDefault: formsNewDefault.post,
        formEdit: formsEdit.post,
        table: tables.post,
        gallery: galleries.post,
        calendar: calendars.post,
        timeline: timelines.post,
    },
    person: {
        filters: filters.person,
        formNew: formsNew.person,
        formNewDefault: formsNewDefault.person,
        formEdit: formsEdit.person,
        table: tables.person,
        gallery: galleries.person,
        calendar: calendars.person,
        timeline: timelines.person,
    },
    ticket: {
        filters: filters.ticket,
        formNew: formsNew.ticket,
        formNewDefault: formsNewDefault.ticket,
        formEdit: formsEdit.ticket,
        table: tables.ticket,
        gallery: galleries.ticket,
        calendar: calendars.ticket,
        timeline: timelines.ticket,
    },
    widget: {
        filters: filters.widget,
        formNew: formsNew.widget,
        formNewDefault: formsNewDefault.widget,
        formEdit: formsEdit.widget,
        table: tables.widget,
        gallery: galleries.widget,
        calendar: calendars.widget,
        timeline: timelines.widget,
    },
};
