import React from 'react';
import { IUnoSection } from '../../types';
import { Column, Wrapper, P, Row, Quote } from './ArticleBody.style';

export type ArticleBodyProps = {
    data: Json;
    section: IUnoSection;
};

export function ArticleBody(_props: ArticleBodyProps) {
    return (
        <Wrapper
            className='ArticleBody-wrapper'
            data-testid='ArticleBody-wrapper'
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
        </Wrapper>
    );
}

export default ArticleBody;
