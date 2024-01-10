# Side Effect Management

GDI's offers a new take on the flux paradigm, one that is more flexible and adaptable to the AI era. This section provides an overview of GDI's approach to side effect management.

## Presentation

Widgets are the building blocks of a GDI board. They are UI components written in React that users interact with.

An example of a simple logo widget folder with an id of `com.usegdi.starter.logo` looks like this:

| Filename           | Description                                          |
| ------------------ | ---------------------------------------------------- |
| Logo.tsx           | React component written in Typescript                |
| Logo.style.tsx     | Component's style implemented with styled-components |
| Logo.container.tsx | Container that feeds data to the component           |

## Containers

As seen above, each widget has a container which is strongly coupled with it. The container is responsible for feeding data to the widgets and handling user interaction. User interaction differ in complexity:

1. **Simple User Interaction**: User clicks to change to dark mode. This is a simple user interaction that can be handled by the container directly.

2. **Complex User Interaction**: User clicks to start playback of the 3d scene. This is a complex user interaction that fires an event.

For simple user interactions with simple side effects, the container can dispatch actions directly to the store.

## App logic

Complex apps have complex side effects. For these types of complex app flows, an event based approach is used. The container dispatches an event which is handled by a saga. The saga is responsible for orchestrating the side effects, which usually involves multiple changes to the store.

## Events

Events are the core building blocks of GDI's side effect management. They are used to orchestrate complex flows in the GDI ecosystem.

Events are categorized into two types:

1. **Entity Events**: events which are related to an entity: 'Asset', 'Document' and such. These events are handled by a saga which is responsible for orchestrating the side effects, which usually involves multiple changes to the store.

2. **GDI Events**: events which are related to the GDI ecosystem. These events are handled by GDI sagas which are responsible for orchestrating different complex flows in the GDI ecosystem. An example is submitting a prompt and triggering a flow run which sets off a chain of events that involve multiple API calls and store updates.

## Data

GDI's data management is based on Redux. It is a powerful and flexible state management library that is widely used in the React ecosystem. The Redux store is auto-synced with the backed simplifying data management for developers. You just need to update the store and the rest is taken care of.

The store is synced in two directions:

1. **Store => Database**: Each change in the store automatically triggers an API call to the backed that updates the database.
2. **Database => Store**: When configured, the store is automatically updated with changes from the database. On a GDI instance such as `usegdi.com`, this is handled with Firestore listeners. On a local instance, this is handled with socket.io.
