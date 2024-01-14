# Extending the Store

GDI's store is a Redux store. It is a single source of truth for the entire application. It is a normalized data structure that is synced with the database. It is also a place to store UI state. Stores are NPM packages that can be installed and used in GDI.

GDI comes with two stores:

- **Store-base** (@gdi/store-base): This is the base store which is required. It contains the core entities and reducers.
- **Store-iso** (@gdi/store-iso): Allows 3d scenes to be rendered in the browser. It is required by all 3d widgets.

## Creating a Store

To create a store, you need to create a new NPM package. The package should offer the following:

- Collections: The type definitions for the root nodes of the store.
- initial state: The initial state of the store.
- Selectors: Selectors are functions that return a slice of the store. They are used to access the store from the containers and from sagas (app logic).

## Using the Store

To use a store, you need to install it in your GDI instance. For example, to install a store named "store-catalogue", you'd need to add the following to the `web`'s package.json:

```json
{
  "dependencies": {
    ...
    "@gdi/store-catalogue": "1.0.0"
  }
}
```

### In Widgets

Stores are used by widgets and app logic. Widgets are the building blocks of a GDI board. They are UI components written in React that users interact with.

As widgets are served from an NPM package such as `@gdi/widgets-starter`, they can import stores directly from the package. For example, the following widget container imports the `catalogue` store from `@gdi/store-catalogue`:

```typescript
import { actions, selectors } from '@gdi/store-catalogue';

export function CatalogueContainer() {
    const dispatch = useDispatch();
    const catalogueItems = useSelector(selectors.catalogue.items);

    // later on: dispatch(actions.products.add(product)),
    ...
}
```

### In App Logic

For app logic, stores are used by sagas. Sagas orchestrate complex dynamics in the GDI ecosystem. They are responsible for handling complex side effects such as API calls and store updates.

Sagas reside in the widgets package or inside one of GDI apps.

An example of a saga that uses the `catalogue` store is:

```typescript
import { actions, selectors } from '@gdi/store-catalogue';

export function* newProduct(action: Action) {
    const { payload} = action;
    const { product } = payload;


    yield put(actions.products.add(product));
}
    const allItems = yield select(selectors.catalogue.items);
    // do something with items if needed
    ...
    }
```
