import { FC } from 'react';
import { IFormGroup, LayoutFlavour } from '../Form/Form.types';
import { Column, Wrapper } from './Layouts.style';

export type LayoutProps = {
  groups: IFormGroup[];
  width?: number;
  padding?: number;
  flex?: number[];
  renderGroup: (groupId: string, index: number) => JSX.Element | null;
};

export function LayoutSingleColumn(props: LayoutProps) {
  const { groups, width, padding = 0 } = props;

  function renderColumn(columnIndex: number) {
    const style = {
      paddingLeft: `${padding}px`,
      paddingRight: `${padding}px`,
    };

    return (
      <Column key={columnIndex} style={style}>
        {groups
          .filter((group) => group.layoutColumnIndex === columnIndex)
          .map((group, index) => props.renderGroup(group.id, index))}
      </Column>
    );
  }

  return (
    <Wrapper
      className='Layouts-wrapper'
      data-testid='Layouts-wrapper'
      $width={width}
      $padding={padding}
    >
      {renderColumn(0)}
    </Wrapper>
  );
}

export function LayoutTwoColumns(props: LayoutProps) {
  const { groups, width, flex = [], padding = 10 } = props;

  function renderColumn(columnIndex: number) {
    const style = {
      paddingLeft: `${padding}px`,
      paddingRight: `${padding}px`,
    };

    return (
      <Column $flex={flex[columnIndex]} key={columnIndex} style={style}>
        {groups
          .filter((group) => group.layoutColumnIndex === columnIndex)
          .map((group, index) => props.renderGroup(group.id, index))}
      </Column>
    );
  }

  return (
    <Wrapper className='Layouts-wrapper' data-testid='Layouts-wrapper' $width={width}>
      {renderColumn(0)}
      {renderColumn(1)}
    </Wrapper>
  );
}

export function LayoutThreeColumns(props: LayoutProps) {
  const { groups, width, flex = [], padding = 10 } = props;

  function renderColumn(columnIndex: number) {
    const style = {
      paddingLeft: `${padding}px`,
      paddingRight: `${padding}px`,
    };

    return (
      <Column $flex={flex[columnIndex]} key={columnIndex} style={style}>
        {groups
          .filter((group) => group.layoutColumnIndex === columnIndex)
          .map((group, index) => props.renderGroup(group.id, index))}
      </Column>
    );
  }

  return (
    <Wrapper className='Layouts-wrapper' data-testid='Layouts-wrapper' $width={width}>
      {renderColumn(0)}
      {renderColumn(1)}
      {renderColumn(2)}
    </Wrapper>
  );
}

export const layouts: Record<LayoutFlavour, FC<LayoutProps>> = {
  singleColumn: LayoutSingleColumn,
  twoColumns: LayoutTwoColumns,
  threeColumns: LayoutThreeColumns,
};
