import React from 'react';
import { Table, Key, BottomLine, Field, Label, Value, Wrapper } from './TranscriptScore.style';

export type TranscriptScoreProps = {};

export function TranscriptScore(_props: TranscriptScoreProps) {
  return (
    <Wrapper className='TranscriptScore-wrapper' data-testid='TranscriptScore-wrapper'>
      <Label>Rhetoric score:</Label>
      <BottomLine>84%</BottomLine>

      <Table>
        <Field>
          <Value>12</Value>
          <Key>inaccuracies</Key>
        </Field>
        <Field>
          <Value>8</Value>
          <Key>mistakes</Key>
        </Field>
        <Field>
          <Value>5</Value>
          <Key>blunders</Key>
        </Field>
        <Field>
          <Value>71</Value>
          <Key>Avg. argument strength</Key>
        </Field>
      </Table>
    </Wrapper>
  );
}

export default TranscriptScore;
