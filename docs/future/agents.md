# Agents or Dynamic Flows

> NOTE: At present, GDI primarily focuses on `static flows`, as there is a vast potential yet to be explored in this area. This section acts as a reference for future explorations in this area.

## What is an AI Agent?

An agent is a software capable of reasoning and making decisions. The code that runs on the IRobot vacuum cleaner is a good example of an agent. It constantly assesses the current state and makes decisions about what to do next.

Agents defer from regular AI flows in the following ways:

1. **Autonomous**: it can run without human intervention.
2. **Decision making**: it can reason about the current state and determine the next action to take.
3. **Continues**: it can run for a long time, even indefinitely.
4. **Function**: It's definition of success is "make the house clean" and it can use any means necessary to achieve that goal.

There are proactively and reactively driven agents. Proactive agents are constantly running and making decisions. Reactive agents are triggered by events and run for a short time. Agents can also interact with other agents, creating complex multi-agent-based systems which correlates to the `Semantic web` vision.

Agents are a powerful concept in LLM that enable the creation of complex AI-driven workflows. A core enabler for agents is GPT-4's remarkable reasoning abilities.

## GPT-4: The Brain

GPT-4's remarkable reasoning abilities position it as a powerful intermediary between different APIs. It can dynamically direct the course of a flow run by assessing the current state and determining subsequent actions. This capability is particularly useful in creating complex agents and projects like [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT).

![Flow Run Visualization](https://raw.githubusercontent.com/dht/gdi-assets/main/images/docs/gpt4-reasoning.jpeg)
