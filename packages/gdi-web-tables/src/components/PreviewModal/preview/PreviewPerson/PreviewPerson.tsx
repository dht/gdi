import React from 'react';
import { Container, Name } from './PreviewPerson.style';

export type PreviewPersonProps = {
    item: IPerson;
};

export function PreviewPerson(props: PreviewPersonProps) {
    const { item } = props;
    const { firstName, lastName } = item;

    return (
        <Container
            className='PreviewPerson-container'
            data-testid='PreviewPerson-container'
        >
            <Name>
                {firstName} {lastName}
            </Name>
        </Container>
    );
}

export default PreviewPerson;
