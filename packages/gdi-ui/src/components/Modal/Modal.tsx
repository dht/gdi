import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useKey } from 'react-use';
import { invokeEvent } from 'shared-base';
import { Icon } from '../Icon/Icon';
import { useFocusOn } from './Modal.hooks';
import './Modal.scss';
import { Content, Header, HeaderActions, Inner, ModalBody, Title, Wrapper } from './Modal.style';
import classnames from 'classnames';

export type ModalProps = {
  title?: string;
  children: JSX.Element[] | JSX.Element;
  open?: boolean;
  onClose: () => void;
  focusOnClassName?: string;
  header?: JSX.Element[] | JSX.Element;
  darkMode?: boolean;
  hideBackdrop?: boolean;
  dataTestId?: string;
};

export function Modal(props: ModalProps) {
  const { open = false, title, focusOnClassName, darkMode, dataTestId } = props;
  const ref = useRef<HTMLDivElement>(null);

  useFocusOn(ref, focusOnClassName);

  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      setTimeout(() => {
        document.body.classList.remove('modal-open');
      });
    };
  }, []);

  function onClose() {
    if (!props.onClose) {
      return;
    }
    props.onClose();
  }

  function onWrapperClick(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!ev.target || !(ev.target as Element).classList.contains('modal-overlay')) {
      return;
    }

    onClose();
  }

  if (!open) {
    return null;
  }

  useKey('Escape', onClose);

  function renderTitle() {
    if (props.header) {
      return props.header;
    }

    return <Title variant='h6'>{title}</Title>;
  }

  function renderModal() {
    const className = classnames('modal-overlay', {
      darkMode,
    });

    return (
      <Wrapper className={className} data-testid={dataTestId} ref={ref} onClick={onWrapperClick}>
        <Inner className={className}>
          <ModalBody className='modal-body'>
            <Header className='header'>
              {renderTitle()}
              <HeaderActions>
                <Icon onClick={onClose} data-testid='close-dialog-btn' name='close' />
              </HeaderActions>
            </Header>
            <Content>{props.children}</Content>
          </ModalBody>
        </Inner>
      </Wrapper>
    );
  }

  const domNode = document.body;

  return createPortal(renderModal(), domNode, 'modal');
}

export default Modal;
