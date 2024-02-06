import React, { useMemo, useState } from 'react';
import { Content, Row, Side, Wrapper } from './VisionNotes.style';
import VisionBar from '../VisionBar/VisionBar';
import { actions } from './VisionNotes.bar';
import Markdown from '../../../Markdown/Markdown';
import VisionList from '../VisionList/VisionList';
import { groups, markdown, notes } from './VisionNotes.data';
import MarkdownRemote from '../../../Markdown/Markdown.remote';

export type VisionNotesProps = {};

export function VisionNotes(_props: VisionNotesProps) {
  const [selectedId, setSelectedId] = useState<string>(notes[0].id);

  const note = useMemo(() => {
    return notes.find((note) => note.id === selectedId);
  }, [selectedId]);

  return (
    <Wrapper className='VisionNotes-wrapper' data-testid='VisionNotes-wrapper'>
      <VisionBar barType='window' header='Notes' actions={actions} />
      <Row>
        <Side>
          <VisionList
            selectedId={selectedId}
            items={notes}
            groups={groups}
            onChange={setSelectedId}
          />
        </Side>
        <Content>
          <MarkdownRemote url={note?.url} />
        </Content>
      </Row>
    </Wrapper>
  );
}

VisionNotes.panelType = 'window';

export default VisionNotes;
