import React from 'react';
import { IUnoSection } from '../../types';
import { Column, Container, P, Row, Quote } from './ArticleBody.style';

export type ArticleBodyProps = {
    data: Json;
    section: IUnoSection;
};

export function ArticleBody(_props: ArticleBodyProps) {
    return (
        <Container
            className='ArticleBody-container'
            data-testid='ArticleBody-container'
        >
            <Row>
                <Column>
                    <P></P>
                    <P></P>
                    <P>
                        <Quote>Quote</Quote>
                    </P>
                    <P></P>
                </Column>
                <Column></Column>
            </Row>
        </Container>
    );
}

export default ArticleBody;
