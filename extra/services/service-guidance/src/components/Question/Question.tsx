import React from 'react';
import ToggleCards from '../ToggleCards/ToggleCards';
import { cards } from '../ToggleCards/ToggleCards.data';
import { H1, P, Wrapper } from './Question.style';

export type QuestionProps = {};

export function Question(_props: QuestionProps) {
    return (
        <Wrapper className='Question-wrapper' data-testid='Question-wrapper'>
            <H1>1. Web presence</H1>
            <P>Does your business has a:</P>
            <ToggleCards cards={cards} />
        </Wrapper>
    );
}

export default Question;
