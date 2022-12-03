import React from 'react';
import { Wrapper, Name } from './PreviewPerson.style';

export type PreviewPersonProps = {
    item: IPerson;
};

export function PreviewPerson(props: PreviewPersonProps) {
    const { item } = props;
    const { firstName, lastName } = item;

    return (
        <Wrapper
            className='PreviewPerson-wrapper'
            data-testid='PreviewPerson-wrapper'
        >
            <Name>
                {firstName} {lastName}
            </Name>
        </Wrapper>
    );
}

export default PreviewPerson;
