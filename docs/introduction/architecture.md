# GDI Architecture

GDI's architecture is designed with the `Git philosophy in mind`. Composition of UI elements is schema-based and can be forked and modified enabling efficient version management, extensibility and collaboration.

When it comes to the backed, the project aims to be provider agnostic, allowing users to choose between different providers for database, storage and API requests. GDI is also designed to be modular, allowing users to choose between remote and local instances, and remote and local runners. This design philosophy grants users complete control over their data and AI API requests.

Below is a matrix illustrating the different configurations available, combining remote and local instances with remote and local runners:

|               |    Remote Instance    |    Local Instance     |
| ------------- | :-------------------: | :-------------------: |
| Remote Runner |     Fully Managed     | Managed Storage & API |
| Local Runner  | Control Storage & API |     Full Control      |

> A runner represents the backend of GDI, which is responsible for handling storage, DB and API requests.
> An instance represents the frontend of GDI, which is responsible for handling UI and user interactions.

As mentioned, a key principle of GDI is its reliance on schema-based entities, predominantly represented in JSON format. This approach offers several advantages:

- **Customization**: Schemas are easily forkable, allowing for tailored modifications to suit specific needs.
- **Version Management**: Efficient handling and tracking of different versions.
- **Extensibility**: The flexibility to extend functionalities as requirements evolve.
- **Unified Interface**: Facilitating a common interface across different entities for consistency and ease of use.

<img src="https://raw.githubusercontent.com/dht/gdi-assets/main/docs/architecture.png" width="100%"/>
