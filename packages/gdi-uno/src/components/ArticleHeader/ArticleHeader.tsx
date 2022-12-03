import React from 'react';
import Share from '../Share/Share';
import { IUnoSection } from '../../types';
import {
    Author,
    AuthorName,
    Column,
    Wrapper,
    Separator,
    ImageSource,
    DateText,
    Details,
    Image,
    ImageDescription,
    Intro,
    Row,
    Title,
    Gap,
} from './ArticleHeader.style';

export type ArticleHeaderProps = {
    data: Json;
    section: IUnoSection;
};

export function ArticleHeader(_props: ArticleHeaderProps) {
    return (
        <Wrapper
            className='ArticleHeader-wrapper'
            data-testid='ArticleHeader-wrapper'
        >
            <Title>Header</Title>

            <Row>
                <Column>
                    <Intro>Intro</Intro>
                    <Details>
                        <Author>
                            By
                            <AuthorName>Jay Peters</AuthorName>
                        </Author>
                        <Separator> | </Separator>
                        <DateText>Oct 10, 2023, 7:08pm EDT</DateText>
                    </Details>
                    <Share />
                    <Image src='/images/game.webp' />
                    <ImageDescription>
                        Image Description
                        <Separator> | </Separator>
                        <ImageSource>Image: Source</ImageSource>
                    </ImageDescription>
                    <Gap />
                </Column>
                <Column />
            </Row>
        </Wrapper>
    );
}

export default ArticleHeader;
