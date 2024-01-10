# App Logic

Complex apps have complex side effects. For these types of complex app flows, an event based approach is used.

GDI takes care of app logic related to:

- Board management
- Flow management
- Core entities
- Authentication

## Board Management

GDI takes care of board management. It handles:

- Preparing and loading boards
- Loading and saving board data
- Managing the board's flow/s

## Flow Management

GDI takes care of flow management. It handles flow related events such as:

- Preparing & running a flow
- Managing the assistants and API calls
- Reporting flow progress
- Error handling
- Updating data in the store

## Core Entities

GDI takes care of core entities. It handles:

- UI state: Loading, current ids, etc.
- Asset: Saving, loading, deleting, etc.
- Document: Saving, loading, deleting, etc.

Assets are files of any type, images, videos, audio, text, etc., that are stored in the asset directory. Assets are organized using tags for efficient retrieval and categorization.

## Authentication and User Settings

GDI takes care of authentication and user settings. It handles:

- User authentication
- Installing and uninstalling boards
- Updating API keys
- User preferences

All of the above are handled by GDI's sagas. Sagas orchestrate complex dynamics in the GDI ecosystem. They are responsible for handling complex side effects such as API calls and store updates.

For more complex flows with multiple side effects, GDI uses an event based approach. Read more on [Side Effect Management](/docs#/application-logic/side-effect-management.md).
