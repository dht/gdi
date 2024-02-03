import { Checkbox } from '../Checkbox/Checkbox';
import { upperFirst } from 'lodash';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import {
  Actions,
  BoardId,
  Column,
  Content,
  Cta,
  Details,
  Field,
  Image,
  Label,
  Name,
  Notes,
  Paragraph,
  Wrapper,
} from './BoardIntro.style';

export type BoardIntroProps = {
  boardId: string;
  boardInfo: Json;
  assetsRootUrl: string;
  onCta: (params?: Json) => void;
};

export function BoardIntro(props: BoardIntroProps) {
  const { boardId, boardInfo, assetsRootUrl } = props;
  const { name, description, fields, imageUrl } = boardInfo;
  const [hideNextTime, setHideNextTime] = useState(false);

  const isPlayback = document.location.hash.length > 0;

  function onCta() {
    props.onCta({ hideNextTime });
  }

  function renderField(field: Json, index: number) {
    const { label, content } = field;

    return (
      <Field key={index}>
        <Label>{upperFirst(label)}:</Label>
        <Content>{content}</Content>
      </Field>
    );
  }

  function renderFields() {
    return fields.map((field: Json, index: number) => renderField(field, index));
  }

  const fixedImageUrl = imageUrl.startsWith('http') ? imageUrl : `${assetsRootUrl}${imageUrl}`;

  return (
    <Wrapper className='BoardIntro-wrapper' data-testid='BoardIntro-wrapper'>
      <Image url={fixedImageUrl} />
      <Details>
        <BoardId>Board {boardId}</BoardId>
        <Name>{name}</Name>
        <Paragraph>{description}</Paragraph>
        {renderFields()}
      </Details>
      <Actions>
        <Column>
          {isPlayback ? (
            <Notes>
              This is a <span className='pink'>playback</span> board,
              <br />a pre-recorded generation session
            </Notes>
          ) : (
            <Notes>
              This is a <span>live</span> board, prompts requests are processed by an available
              server (if exists)
            </Notes>
          )}
          <Checkbox
            id='do-not-show'
            label="Don't show board intros"
            value={hideNextTime}
            onChange={setHideNextTime}
          />
        </Column>
        <Cta onClick={onCta}>
          <Icon name='play_arrow' />
          {isPlayback ? 'Play' : 'Start'}
        </Cta>
      </Actions>
    </Wrapper>
  );
}

export default BoardIntro;
