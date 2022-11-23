import React from 'react';
import Share from '../Share/Share';
import { IUnoSection } from '../../types';
import {
    Author,
    AuthorName,
    Column,
    Container,
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
        <Container
            className='ArticleHeader-container'
            data-testid='ArticleHeader-container'
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
                <Column></Column>
            </Row>
        </Container>
    );
}

export default ArticleHeader;
