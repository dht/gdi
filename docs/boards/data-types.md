# Board Data Type

In GDI, boards are primarily defined through JSON structures, which encompass meta-information and UI components known as widgets. These widgets are the building blocks of the board's interface.

## Main Board Structure: `IBoard`

The core data type for boards is defined as `IBoard`. The structure of `IBoard` is as follows:

```typescript
export type IBoard = {
  id: string;
  identifier: string;
  version: string;
  url: string;
  boardInfo: IBoardInfo;
  author: string;
  dependencies: Json;
  apis: string[];
  elements: IElementsPerResolution;
  defaults: {
    setupId: string;
    playbackId?: string;
  };
  setupsUrl: string;
  setups?: ISetups;
  playbacksUrl: string;
  playbacks?: IPlaybacks;
  flowUrl: string;
  flow?: IFlow & Json;
  sourceUrl: string;
  npmUrl: string;
  vscodeUrl: string;
  mobile?: {
    hidePrompt?: boolean;
    darkMode?: boolean;
  };
  isActive: boolean;

  // Transient fields
  reviewInfo: IReviewInfo;
  isMyBoard?: boolean;
};
```

You can see an example of a board configuration [here](https://github.com/dht/gdi-assets/blob/main/boards/B-001/B-001.json).

## Flow Definitions

Boards often include flow definitions, which are specified in separate configuration files. These flows orchestrate the board's functionality, defining the sequence of operations and interactions within the board.

## Dynamic URL Fetching

The URLs specified in board definitions are dynamically fetched and expanded during the board's loading process. This mechanism ensures that the board's components are up-to-date and functioning as intended, pulling necessary resources and data as needed.

This JSON-based structure and dynamic fetching process provide a flexible and scalable way to define and manage boards in the GDI ecosystem.
