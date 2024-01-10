import { Ratings } from '@gdi/ui';
import React from 'react';
import { ActionHome } from '../../sagas/saga.home';
import { Cta, Row, Version, Wrapper } from './DetailsCta.style';
import classnames from 'classnames';
import { IBoard } from '@gdi/store-base';

export type DetailsCtaProps = {
  board: IBoard;
  children: React.ReactNode;
  onAction: (action: ActionHome) => void;
};

export function DetailsCta(props: DetailsCtaProps) {
  const { board } = props;
  const { id, version, isActive, reviewInfo, isMyBoard } = board;
  const { rating = 0 } = reviewInfo;

  function onPreview() {
    props.onAction({
      type: 'HOME',
      verb: 'preview',
      id,
    });
  }

  function onInstall() {
    props.onAction({
      type: 'HOME',
      verb: 'install',
      id,
    });
  }

  function onUnInstall() {
    props.onAction({
      type: 'HOME',
      verb: 'uninstall',
      id,
    });
  }

  const previewText = isMyBoard ? 'Open Board' : 'Preview';
  const installText = isMyBoard ? 'Uninstall' : 'Install & Use';

  const className = classnames('outlined', {
    gold: isMyBoard,
  });

  return (
    <Wrapper className='DetailsCta-wrapper' data-testid='DetailsCta-wrapper'>
      <Row>
        <Version>version: {version}</Version>
        <Ratings value={rating} />
      </Row>
      {props.children}
      <Cta disabled={!isActive} className={className} onClick={onPreview}>
        {previewText}
      </Cta>
      <Cta disabled={!isActive} onClick={isMyBoard ? onUnInstall : onInstall}>
        {installText}
      </Cta>
    </Wrapper>
  );
}

export default DetailsCta;
