# Understanding Flow Runs

## What is a Flow Run?

A flow run in GDI refers to a single execution cycle of a flow. Each run has the potential to either succeed or fail. On successful completion, a flow run produces an output and often updates the board with new data or insights.

## Execution Environment: AI Runner

In GDI, the execution of flows is managed by the `AI Runner`, a dedicated backend component. For users of `usegdi.com`, this is typically handled through Firebase functions. Importantly, GDI also offers the flexibility for users to run the `AI Runner` locally on their own machines. This local execution option provides an added layer of security and control, as it eliminates the need to transmit API keys over the internet, ensuring that sensitive data remains within the user's local environment.

### API Key Management

Executing a flow run requires various API keys, set up during the instance's initial configuration. On `usegdi.com`, these keys for different AI providers are stored securely using AES-256-CTR encryption, ensuring data safety and integrity.

## Model Orchestration in Flows

GDI's flows are capable of invoking multiple AI models from various providers within a single run. This orchestration allows for the integration of diverse outputs, sometimes utilizing the output of one model as input for another. The output types are versatile, including textual, image, audio, and data (JSON formats).

## Utilizing OpenAI's Assistant API

GDI frequently leverages the [OpenAI Assistant API](https://platform.openai.com/docs/assistants/overview) for various tasks. This involves managing assistants, threads, and runs tailored to the specific requirements of each flow.

<img src="https://raw.githubusercontent.com/dht/gdi-assets/main/assets/images/docs/16.png" width="100%"/>
