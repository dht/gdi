import React from 'react';
import {
  Action,
  ActionTitle,
  Actions,
  Author,
  By,
  Details,
  H1,
  Image,
  Installations,
  Left,
  Reviews,
  Right,
  Row,
  Wrapper,
} from './DetailsHeader.style';
import { IBoard } from '@gdi/store-base';
import Ratings from '../../../Ratings/Ratings';
import Icon from '../../../Icon/Icon';

export type DetailsHeaderProps = {
  board: IBoard;
  onAction: (action: any) => void;
};

export function DetailsHeader(props: DetailsHeaderProps) {
  const { board } = props;
  const { id, boardInfo, reviewInfo } = board;
  const { name, imageUrl } = boardInfo;
  const { rating = 0, reviewsCount, installationCount = 0 } = reviewInfo;

  const reviewsCountText = reviewsCount.toLocaleString('en-US');
  const installationText = installationCount.toLocaleString('en-US');

  const style: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
  };

  function onShare() {
    props.onAction({
      type: 'HOME',
      verb: 'share',
      id,
    });
  }

  function onSave() {
    props.onAction({
      type: 'HOME',
      verb: 'save',
      id,
    });
  }

  return (
    <Wrapper className='DetailsHeader-wrapper' data-testid='DetailsHeader-wrapper'>
      <Left>
        <Image style={style} />
      </Left>
      <Right>
        <Row>
          <H1>{name}</H1>
          <By>by</By>
          <Author>Gdi</Author>
        </Row>
        <Row>
          <Details>
            <Ratings value={rating} />
            <Reviews>{reviewsCountText} reviews</Reviews>
            <Installations>{installationText} installations</Installations>
          </Details>
          <Actions>
            <Action onClick={onShare}>
              <Icon name='Share' size={18} />
              <ActionTitle>Share</ActionTitle>
            </Action>
            <Action onClick={onSave}>
              <Icon name='Heart' size={18} />
              <ActionTitle>Save for later</ActionTitle>
            </Action>
          </Actions>
        </Row>
      </Right>
    </Wrapper>
  );
}

export default DetailsHeader;
