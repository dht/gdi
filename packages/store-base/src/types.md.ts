export type IMyData = {
  docs: IDocuments;
  contacts: IContacts;
  todos: ITodos;
  financeLines: IFinanceLines;
  lists: ILists;
  listItems: IListItems;
  events: IEvents;
  externalEvents: IEvents;
  locations: ILocations;
  books: IBooks;
  reads: IReads;
  posts: IPosts;
  sales: ISales;
  reminders: IReminders;
  things: IThings;
  multis: IMultis;
};

export type IItem = {
  id: string;
  week?: string;
  tier?: string;
  project?: string;
  tags?: string[];
  dataTags?: string[];
  [key: string]: any;
};

export type IDocuments = Record<string, IItem>;

export type IContacts = Record<string, IItem>;

export type ITodo = {
  id: string;
  title: string;
  completed: boolean;
} & IItem;

export type IMulti = {
  id: string;
  name: string;
  iconName: string;
  boardId: string;
  order: number;
};

export type ITodos = Record<string, ITodo>;

export type IFinanceLines = Record<string, IItem>;

export type ILists = Record<string, IItem>;

export type IListItems = Record<string, IItem>;

export type IEvents = Record<string, IItem>;

export type ILocations = Record<string, IItem>;

export type IBooks = Record<string, IItem>;

export type IReads = Record<string, IItem>;

export type IPosts = Record<string, IItem>;

export type ISales = Record<string, IItem>;

export type IReminders = Record<string, IItem>;

export type IThings = Record<string, IItem>;

export type IMultis = Record<string, IMulti>;
