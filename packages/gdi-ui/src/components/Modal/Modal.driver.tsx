import { render, fireEvent } from '@testing-library/react';
import { Modal, ModalProps } from './Modal';
import { BaseComponentDriver } from 'testing-base';

export class ModalDriver extends BaseComponentDriver {
  private props: Partial<ModalProps> = {};

  constructor() {
    super('Modal');
  }

  when: any = {
    rendered: () => {
      render(<Modal {...(this.props as ModalProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Modal {...(this.props as ModalProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ModalProps>) => {
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
