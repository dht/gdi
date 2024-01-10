# Understanding the Layout in GDI

## Layout Configurations

GDI employs the [CSS grid layout system](https://css-tricks.com/snippets/css/complete-guide-grid/) for arranging widgets on the screen. Unlike CSS flexbox, which is designed for one-dimensional layouts, the grid system is two-dimensional, allowing for more complex layouts. It also offers flexibility and responsiveness, adapting to different screen sizes and orientations.

### Defining Board Layouts

Each board's layout is defined within its configuration, specifying how elements (widgets) are positioned and displayed. An example of a layout element definition looks like this:

```json
"e1": {
  "id": "e1",
  "widgetId": "com.usegdi.starter.logo",
  "title": "Logo",
  "position": {
    "x": 2,
    "y": 2
  },
  "dimension": {
    "x": 20,
    "y": 6
  },
  "boardId": "B-009",
  "flags": {},
  "props": {
  }
}
```

## Widgets

Widgets are integral components in the GDI ecosystem, organized and distributed through packs.

### Widget Packs

A widget pack is essentially an NPM package that hosts a collection of widgets. For instance, `@gdi/widgets-starter` is a pack containing a catalog of starter widgets. This approach allows for easy distribution, update, and integration of widgets into GDI boards.

### Widget Identification and Structure

Each widget in a pack has a unique identifier, typically in the form of an inverse URL. Below is an example of how a widget might be defined:

```typescript
export const widget: IWidget = {
  id: 'com.usegdi.starter.chat',
  name: 'Chat',
  description: 'Chat',
  component: ...,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};
```

Key elements in this definition include:

- **ID**: A unique identifier, revered-domain, in this case, com.usegdi.starter.chat.
- **Name and Description**: Provide basic information about the widget.
- **Component**: Defines how the widget is rendered, taking an instance and returning a React component.
  Size: Specifies the default size of the widget in the layout grid.
- **Tags**: Useful for categorization and searchability within the widget pack.

### Interactivity and Functionality

Widgets are not just static elements; they are designed to be interactive and functional:

- **Database Interaction**: Widgets can interact with the GDI database, performing operations like reading and writing data.
- **Asset Library Access**: They also have the capability to access and utilize the assets stored in the 'asset library', making them versatile tools for various tasks within the GDI environment.

By leveraging these capabilities, widgets in GDI can provide a wide range of functionalities, from simple display elements to complex interactive tools.
