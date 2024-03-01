# Core Entities of GDI

- **Instance**: An instance hosts multiple AI Boards. `usegdi.com` is an example of a GDI instance. Users have the flexibility to self-host their instances as well.

- **Runner**: Operating as the backbone, a runner manages databases, storage, and AI calls to Language Learning Models (LLMs) and other APIs. While `usegdi.com` employs Firebase functions, users can deploy a local runner for seamless interaction with any instance, essentially forming GDI's backend infrastructure.

- **Board**: A single-page web application that serves as a graphical user interface for a specific task. For example, the `Asset Manager` board is designed for efficient asset management. All boards share a common database and asset library, allowing for seamless integration between boards.

- **Asset**: A file of any type, images, videos, audio, text, etc., that is stored in the asset directory. Assets are organized using tags for efficient retrieval and categorization.

- **Tag**: Allow effective asset management. Each asset can be tagged with multiple tags, allowing for flexible categorization. The `project-[name]` tag format is specifically designed to group assets under particular projects.

- **Flow**: Akin to chains in LangChain, flows are sequences of operations executed by LLMs or other APIs, defined by a schema. Each flow has designated inputs and outputs.

- **FlowRun**: A flow run is a singular execution of a flow, initiated with specific input to produce a defined output, often triggered by a user prompt.

- **Playback**: Some boards have the capability to record and replay the output of a FlowRun. A playback is this recorded output, allowing users to share a board's generated content with others.

![500](https://raw.githubusercontent.com/dht/gdi-assets/main/images/docs/2.png)
