import { render, fireEvent } from '@testing-library/react';
import { CommandPalette, CommandPaletteProps } from './CommandPalette';
import { BaseComponentDriver } from 'testing-base';
import { ICommandPaletteItem } from './CommandPalette.types';

export class CommandPaletteDriver extends BaseComponentDriver {
  private props: Partial<CommandPaletteProps> = {
    items: [],
    onRun: (_command: ICommandPaletteItem) => {},
    isDarkMode: true,
  };

  constructor() {
    super('CommandPalette');
  }

  when: any = {
    rendered: () => {
      render(<CommandPalette {...(this.props as CommandPaletteProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<CommandPalette {...(this.props as CommandPaletteProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<CommandPaletteProps>) => {
      this.props = props;
      return this;
    },
  };

  get = {
    containerClassName: () => {
      return this.wrapper.className;
    },
    label: () => {
      return this.wrapper.innerHTML;
    },
  };
}
