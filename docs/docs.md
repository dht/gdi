# About

GDI's aims to revolutionize user interfaces in the AI era. The project strives to simplify tasks such as asset management, model orchestration, data management, and cost optimization while empowering you to collaborate and enhance the work of others.

# Core concepts

- **Instance**: A GDI instance hosts diverse AI Boards. For instance, `usegdi.com` is an example, but you have the option to self-host one. It serves as GDI's frontend.

- **Runner**: A GDI runner takes control of database, storage, and AI call management to LLMs and other APIs. `usegdi.com` utilizes Firebase functions, but you can run a local runner on your machine for interaction with any instance. It acts as the backend infrastructure for GDI.

- **Board**: A board is a one-page webapp offering specific capabilities, defined by a schema that's easily forkable and customizable. All apps share a common database and access the "asset library."

- **Asset**: Assets encompass images, audio files, textual documents, JSONs, and even 3D models, all neatly stored in the asset directory and tagged for organization.

- **Tag**: Tags are indispensable for asset organization, allowing multiple tags per asset. Notably, there's a specialized `project-[name]` tag format to facilitate asset grouping by project.
