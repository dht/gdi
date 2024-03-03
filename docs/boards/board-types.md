# Types of Boards

GDI categorizes its boards into three distinct types, each symbolized by a specific shape. These shapes reflect the unique operational flow and interaction style of each board type.

| shape                       | type      | description                      |
| --------------------------- | --------- | -------------------------------- |
| ![shape-line][line]         | Linear    | Simple input-output AI flows     |
| ![shape-circle][circle]     | Continues | Repeatable input-output AI flows |
| ![shape-triangle][triangle] | Adhoc     | AI flows used as side-tools      |

[line]: https://raw.githubusercontent.com/dht/gdi-assets/main/assets/images/docs/shape-line.png
[circle]: https://raw.githubusercontent.com/dht/gdi-assets/main/assets/images/docs/shape-circle.png
[triangle]: https://raw.githubusercontent.com/dht/gdi-assets/main/assets/images/docs/shape-triangle.png

## Indication

A board type can be identified by its symbol in the top right corner of the board. For example, the `Asset Manager` board is a linear board, as indicated by the line symbol:

## Linear Boards

> Symbol: Line

Linear boards are characterized by their straightforward input-output structure. A prime example is an image generation board: users input a text prompt and receive an image asset as output. These boards are ideal for tasks with clear start and end points.

## Continuous Boards

> Symbol: Circle

Continuous boards are designed for tasks that involve ongoing refinement and development. The output from these boards is not static but evolves over time. A typical use case is document editing, where users iteratively request the LLM to enhance and update a document, making it a continuous process.

## Ad-hoc Boards

> Symbol: Triangle

Ad-hoc boards are the most complex and versatile among the three. They integrate LLMs and AI models to provide a comprehensive application experience. For instance, a 3D editor board exemplifies an ad-hoc board, where AI models are dynamically employed as tools within the workflow. The term 'ad-hoc' reflects the flexibility and on-demand use of AI models in these boards.

<img src="https://raw.githubusercontent.com/dht/gdi-assets/main/assets/images/docs/3.png" width="500"/>
