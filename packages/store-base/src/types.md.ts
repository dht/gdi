import { IElementsPerResolution } from 'igrid';
import { NoId } from './utils/id';
import type { IIsoStore } from '@gdi/store-iso';
import { IDocument } from './types';

export type Json = Record<string, any>;

export type IMyData = {
  docs: IDocuments;
  contact: IContacts;
  todos: ITodos;
  financeLines: IFinanceLines;
  lists: ILists;
  listItem: IListItems;
  events: IEvents;
  externalEvents: IEvents;
  locations: ILocations;
  books: IBooks;
  sales: ISales;
  reminders: IReminders;
  things: IThings;
};

export type IDocuments = Record<string, Json>;

export type IContacts = Record<string, Json>;

export type ITodo = {
  id: string;
  title: string;
  completed: boolean;
};

export type ITodos = Record<string, ITodo>;

export type IFinanceLines = Record<string, Json>;

export type ILists = Record<string, Json>;

export type IListItems = Record<string, Json>;

export type IEvents = Record<string, Json>;

export type ILocations = Record<string, Json>;

export type IBooks = Record<string, Json>;

export type ISales = Record<string, Json>;

export type IReminders = Record<string, Json>;

export type IThings = Record<string, Json>;
