# The Base Store

The base store is the cornerstone of the GDI ecosystem, serving as the primary repository for essential data and collections required to operate a GDI instance. It encompasses a variety of components, including user data, application state, and more.

## Root Definition

The structure of the `IGdiStore` is as follows:

```typescript
export type IGdiStore = {
  appState: IAppState;
  adapters: IAdapters;
  user: IUser;
  currentIds: ICurrentIds;
  playbackState: IPlaybackState;
  soundState: Json;
  logs: ILogs;
  messages: IMessages;
  transcriptLines: ITranscriptLines;
  transcriptAudios: ITranscriptAudios;
  barItems: IBarItems;
  myBoards: IMyBoards;
  board: NoId<IBoard>;
  boards: IBoards;
  settings: ISettings;
  assistants: IAssistants;
  prompts: IPrompts;
  tags: ITags;
  assets: IAssets;
  document: IDocument;
  documentSuggestions: IDocumentSuggestions;
  todos: ITodos;
  sagas: ISagas;
  voices: IVoices;
  _lastAction: Action;
} & IIsoStore &
  IFlow;
```

This structure includes core collections vital for managing flows, user interactions, and board functionalities.

## Data sync and Dynamics

Every board within GDI has access to the data stored in the base store. This data is consistently prepared and ready for use, ensuring a seamless experience across the platform.

## Two-Way Interaction Between Widgets and Store

Widgets on the boards interact with the base store bidirectionally:

- **Data Reading**: Widgets use selectors to retrieve data from the store.
- **Data Modification**: Actions are dispatched by widgets to make changes in the store.
  Importantly, widgets do not need to make direct API calls, as the store automatically syncs with the backend after every modification.

## CRUD Operations and Optimistic Updates

CRUD operations on root nodes (collections) in the store can be defined as optimistic. This means the UI updates immediately, without waiting for the operation's success confirmation. For non-optimistic calls, a loader appears during the API call, delaying UI changes until completion.

## Selectors for Efficient Data Fetching

To fetch information in an optimized manner, GDI employs reselect selectors. These selectors form a hierarchy, simplifying and streamlining the querying of information from the local Redux database. They function similarly to SQL queries or GraphQL, requesting specific subsets of the database filtered and sorted according to business logic needs.
