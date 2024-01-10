import classnames from 'classnames';
import React from 'react';
import {
  Actions,
  Content,
  Copy,
  Count,
  Gap,
  TextArea,
  Title,
  Top,
  Wrapper,
} from './IOEditor.style';
import Icon from '../Icon/Icon';
import { format } from '../../utils';

export type IOEditorProps = {
  title?: string;
  value?: string;
  iconName?: string;
  height?: number;
  copyTestId?: string;
  withBorder?: boolean;
  showHide?: boolean;
  disabled?: boolean;
  onChange?: (content: string, id?: string) => void;
  onAction: (verb: any, params?: Json) => void;
};

export const IOEditor = React.forwardRef((props: IOEditorProps, ref: any) => {
  const {
    title = '',
    value = '',
    iconName = '',
    copyTestId = 'Copy',
    withBorder,
    showHide,
    disabled,
    height = 150,
  } = props;

  const style: React.CSSProperties = {
    height: props.height ? props.height + 'px' : 'auto',
  };

  const className = classnames('IOEditor-wrapper', {
    border: withBorder,
    'show-hide': showHide,
  });

  return (
    <Wrapper className={className} data-testid='IOEditor-wrapper' style={style}>
      <Top className='top'>
        <Title>
          <Icon name={iconName} />
          {title}
        </Title>
        <Count>({format.number.normal(value.length)} characters)</Count>
        <Gap />
        <Actions>
          <Copy className='action-copy' />
        </Actions>
      </Top>
      <Content className='content'>
        <TextArea rows={20} disabled={disabled} ref={ref} value={value.replace(/\\n/g, '\n')} />
      </Content>
    </Wrapper>
  );
});

export default IOEditor;
