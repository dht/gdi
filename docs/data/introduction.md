# Data Management in GDI

GDI's data management system is designed for efficiency and scalability, sharing a single database across all applications.

## Unified Database

The core of GDI's data architecture is a strongly-typed, extendable database. A key feature of this system is the automatic synchronization with the backend, ensuring that any changes made locally are promptly reflected in the backend database.

## Technology Stack

GDI employs a robust stack to manage and synchronize data:

- **Redux**: Serves as the centralized data store, managing the state across the application.
- **Redux-Saga**: Utilized for handling side effects in Redux, ensuring smooth data flow and state management.
- **Firestore**: Acts as the persistence layer, storing and retrieving data from the cloud.

### Advantages of Using Redux

Redux brings several benefits to GDI's data architecture:

1. **Simple Data Structure**: Data is stored locally in an easily manageable JSON format.
2. **Pure Reducers**: The use of pure functions in reducers guarantees atomic operations. This feature makes features like undo/redo straightforward to implement.
3. **Middleware-Driven Sync**: The auto-sync with the backend is efficiently handled through Redux middleware, providing a seamless data flow between local and cloud storage.

## Current Limitations

While GDI's data system is robust, there are areas slated for future improvement:

- **Error Handling in API Calls**: Currently, there is no failsafe for failed API calls. Operations are not automatically rolled back on failure. Implementation of this functionality is planned in future updates.
- **Pagination Support**: At present, GDI does not support pagination. While Redux can handle collections with thousands of items, challenges may arise with databases containing over 10,000 items. Pagination is on the roadmap for future implementation.

These limitations are acknowledged as part of GDI's ongoing development and will be addressed to enhance the system's robustness and scalability.
