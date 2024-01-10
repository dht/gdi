# Redux-store-generator

Redux-store-generator turns a JSON structure into a fully-fledged [redux store](https://redux.js.org/introduction/getting-started).

-   [Redux-store-generator](#redux-store-generator)

    -   [Basic usage](#basic-usage)
    -   [Installation](#installation)
    -   [Usage](#usage)
        -   [Conventions](#conventions)
        -   [Data structures](#data-structures)
        -   [A full example](#a-full-example)
    -   [Available verbs per node type](#available-verbs-per-node-type)
        -   [Single](#single)
        -   [Queue](#queue)
        -   [Collection](#collection)
        -   [Grouped list](#grouped-list)
    -   [Helper actions](#helper-actions)
        -   [Example:](#example)
    -   [Alternatives](#alternatives)

`Redux-store-generator` generates:

-   A root reducer
-   `Strongly-typed` actions to mutate the state

The actions follow simple REST-like verbs (patch, update, delete, etc). The benefits of this approach are:

-   Extending your store and maintaining it as easy as changing a JSON
-   Reduces boilerplate code
-   Increases test coverage
-   (optional) Allows you to implement an API solution on top of this convention

## Basic usage

## Installation

```zsh
yarn add redux-store-generator
```

## Usage

```typescript
import {
    generateReducersForStore,
    generateActionsForStore,
} from 'redux-store-generator';

type IUser = {
    name: string;
    email: string;
};

type MyStore = {
    user: IUser;
};

const schema: MyStore = {
    user: {
        name: 'Michael',
        email: 'michael.m@example.com',
    },
};

const rootReducer = generateReducersForStore<MyStore>(schema);
const actions = generateActionsForStore<MyStore>(schema);

const store = createStore(combineReducers(rootReducer));

// Now you have a redux-store which responds to the auto-generated actions
// In this example, this actions can be dispatch on the store:
actions.user.patch({ email: 'michael@other-domain.com' });
actions.user.setAll({ name: 'Pia', email: 'pia@domain.com' });
```

### Conventions

`Redux-store-generator` depends on specific conventions:

-   Shallow structure
-   Key-value collections
-   String based Ids \*

> \* all inner items are expected to have an "id" field of type string

### Data structures

To cover most data-structure needs, there are 4 types of entity structures:

| Type        | Description                         | Example     |
| ----------- | ----------------------------------- | ----------- |
| Single      | A simple key-value object           | currentUser |
| Collection  | For instance: Record<id, Product>\* | Products    |
| List        | For instance: Log[]                 | Logs        |
| GroupedList | For instance: Record<id, Chat> \*\* | Chats       |

> \* id represents a string

> \*\* In this example Chat would have an "items" field which contains an array of chat messages

### A full example

```typescript
import {
    generateReducersForStore,
    generateActionsForStore,
} from 'redux-store-generator';
import { combineReducers, createStore } from 'redux';

type IUser = {
    name: string;
    email: string;
};

type ILog = {
    id: string;
    timestamp: number;
    message: string;
};

type IProduct = {
    id: string;
    name: string;
    price: number;
};

type IChatMessage = {
    id: string;
    displayName: string;
    timestamp: number;
    message: string;
    isSeen: boolean;
};

type IChat = {
    id: string;
    title: string;
    items: IChatMessage[];
};

type MyStore = {
    currentUser: IUser;
    logs: ILog[];
    products: Record<string, IProduct>;
    chats: Record<string, IChat>;
};

const schema: MyStore = {
    currentUser: {
        name: 'Michael',
        email: 'michael.m@example.com',
    },
    logs: [
        {
            id: '1',
            timestamp: 0,
            message: '',
        },
    ],
    products: {
        1: {
            id: '1',
            name: 'Dji Mavic air 2',
            price: 1099,
        },
    },
    chats: {
        1: {
            id: '1',
            title: 'Sales',
            items: [
                {
                    id: '1',
                    displayName: 'Laura',
                    isSeen: true,
                    message: "Yes, it's available",
                    timestamp: 0,
                },
            ],
        },
    },
};

const rootReducer = generateReducersForStore<MyStore>(schema);
const actions = generateActionsForStore<MyStore>(schema);

const store = createStore(combineReducers(rootReducer));

// Now you have a redux-store which responds to the auto-generated actions
// this actions can be dispatch on the store:

actions.currentUser.patch({ email: 'michael@other-domain.com' });
actions.currentUser.setAll({ name: 'Pia', email: 'pia@domain.com' });

actions.logs.push({ id: '2', message: '', timestamp: 0 });
actions.logs.pop();
actions.logs.pushMany([{ id: '2', message: '', timestamp: 0 }, { id: '3', message: '', timestamp: 0 }]); // prettier-ignore
actions.logs.setAll([{ id: '2', message: '', timestamp: 0 }, { id: '3', message: '', timestamp: 0 }]); // prettier-ignore
actions.logs.clear();

actions.products.add({ id: '2', name: '', price: 10 });
actions.products.setAll({ 2: { id: '2', name: '', price: 10 } }); // replaces the collection
actions.products.setMany({ 2: { id: '2', name: '', price: 10 } }); // changes specific items
actions.products.set('1', { id: '1', name: '', price: 10 });
actions.products.delete('1');
actions.products.patch('1', { name: 'New product name' });

actions.chats.add({ id: '2', title: '' });
actions.chats.setAll({ 2: { id: '2', title: '', items: [] } }); // replaces the collection
actions.chats.setMany({ 2: { id: '2', title: '', items: [] } }); // changes specific items
actions.chats.set('1', { id: '1', title: '' });
actions.chats.delete('1');
actions.chats.patch('1', { title: 'New product name' });
// and for the inner items
actions.chats.pushItem('1', { id: '1', displayName: '', timestamp: 0, message: '', isSeen: false }); // prettier-ignore
actions.chats.popItem('1');
actions.chats.pushManyItems('1', [{ id: '1', displayName: '', timestamp: 0, message: '', isSeen: false } ]); // prettier-ignore
actions.chats.setItems('1', [{ id: '1', displayName: '', timestamp: 0, message: '', isSeen: false } ]); // prettier-ignore
actions.chats.clearItems('1');
```

## Available verbs per node type

### Single

| Verb   | Description                  |
| ------ | ---------------------------- |
| patch  | partially changes the entity |
| setAll | replaces the entity          |

### Queue

| Verb     | Description                  |
| -------- | ---------------------------- |
| push     | adds an item to the queue    |
| pop      | pops an item from the queue  |
| pushMany | adds many items to the queue |
| setAll   | replaces the queue           |
| clear    | clears the queue             |

### Collection

| Verb    | Description                       |
| ------- | --------------------------------- |
| setAll  | replaces the collection           |
| setMany | adds many items to the collection |
| set     | replaces a specific item          |
| delete  | deletes a specific item           |
| patch   | modifies a specific item          |

### Grouped list

> Note GroupedLists are a combination of a collection with an inner queue

| Verb          | Description                                |
| ------------- | ------------------------------------------ |
| setAll        | replaces the collection                    |
| setMany       | adds many items to the collection          |
| set           | replaces a specific item                   |
| delete        | deletes a specific item                    |
| patch         | modifies a specific item                   |
| pushItem      | adds an item to an inner items queue \*    |
| popItem       | pops an item from an inner items queue \*  |
| pushManyItems | adds many items to an inner items queue \* |
| setItems      | replaces an inner items queue \*           |
| clearItems    | clears an inner items queue \*             |

> \* if you have a GroupedList of chats an one of the chat is { id: '10', title: 'Important Chat', items: [] }, the inner `items` field represents a queue of chat messages. all the verbs which manipulate the inner items queue refer to the chat messages in this example. To illustrate, `pushItem` would be used when a new chat message arrives for this chat.

## Helper actions

Helper actions are available to support API data fetches via GET and creation of new items via POST.

| Entity type | Verb   |
| ----------- | ------ |
| single      | get    |
| queue       | get \* |
| collection  | get \* |
| groupedList | get \* |
| collection  | add    |
| groupedList | add    |

> \* parameters can be added in a JSON structure

Those actions do _not_ effect the store's state, they have no side-effects. They exist only to be caught via a [middleware](https://redux.js.org/understanding/history-and-design/middleware) or [a saga](https://redux-saga.js.org/) so they can be handled as needed.

For instance, when a user add a new item to a collection, an `Id` is not yet available as it will be given by the backend, so a common practice would be:

1. Fire a `add` action:
    ```typescript
    actions.products.add({ name: 'new product', price: 10.9 }); // dispatch this action
    ```
2. Catch it in a middleware/saga and handle the API call
3. Upon success change the store via a `set` action:
    ```typescript
    // dispatch this action
    actions.products.set('540', {
        id: '540',
        name: 'new product',
        price: 10.9,
    });
    ```
    > In this example the backend returned `540` as the newly-generated id for this product

### Example:

```typescript
// for GET
actions.currentUser.get();
actions.logs.get({ page: 2 });
actions.products.get({ search: 'drone', filter: {}, sort: {} });
actions.chats.get({ limit: 50 });

// for POST
actions.products.add({ name: '', price: 10 });
actions.chats.add({ title: '' });
```

## Alternatives

[Redux Toolkit](https://redux-toolkit.js.org/) is an alternative to reduce boilerplate in redux-powered web apps. It may be better suited for certain use-cases. This comparison table may help you decide what is the best tool for your needs:

|                            | redux-store-generator |    redux-toolkit    |
| -------------------------- | :-------------------: | :-----------------: |
| Reducers                   |    auto-generated     | manually written \* |
| API                        |         none          |    via RTK query    |
| Business logic in reducers |     not supported     |      supported      |

`Redux-toolkit` (with `RTK query`) aims to provide an opinionated solution for a complete data cycle, from action invocation to side-effects, back to store manipulation. It has a mechanism for contributing slices to the store which are fully-configured (with API concerns).

`redux-store-generator` on the other hand, is a thinner opinionated solution for managing collections. You are required to implement an API mechanism on your own or use another package to do so.

The core question is whether you want to treat your store as a simple data-warehouse or a hub for business logic implementations.

If you wish to implement business-logic in your reducers, `redux-toolkit` would be a better fit for you. If you want to keep your reducers' logic simple and use other ways (sagas, middlewares) to implement business logic, `redux-store-generator` might better cater to your needs.

> \* simplified via convenient methods
