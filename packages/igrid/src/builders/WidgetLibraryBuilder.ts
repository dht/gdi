import { IWidgets, IWidget, IWidgetLibraryBuilder } from '../grid.types';

export class WidgetLibraryBuilder implements IWidgetLibraryBuilder {
  private widgets: IWidgets = {};

  withWidgets(widgets: IWidget[]) {
    widgets.forEach((widget) => {
      this.widgets[widget.id] = widget;
    });

    return this;
  }

  build(): IWidgets {
    return this.widgets;
  }
}
