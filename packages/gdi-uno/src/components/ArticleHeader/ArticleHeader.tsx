import React from 'react';
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
import Share from '../Share/Share';

export type ArticleHeaderProps = {};

export function ArticleHeader(_props: ArticleHeaderProps) {
    return (
        <Container
            className='ArticleHeader-container'
            data-testid='ArticleHeader-container'
        >
            <Title>
                Gran Turismo 7 has been largely unplayable for hours due to
                server maintenance
            </Title>

            <Row>
                <Column>
                    <Intro>
                        ‘Due to an issue found with Update 1.07, we are
                        extending the current server maintenance period’
                    </Intro>
                    <Details>
                        <Author>
                            By
                            <AuthorName>Jay Peters</AuthorName>
                        </Author>
                        <Separator> | </Separator>
                        <DateText>Mar 17, 2022, 7:08pm EDT</DateText>
                    </Details>
                    <Share />
                    <Image src='/images/game.webp' />
                    <ImageDescription>
                        It has extended server maintenance due to an issue.
                        <Separator> | </Separator>
                        <ImageSource>Image: Sony</ImageSource>
                    </ImageDescription>
                    <Gap />
                </Column>
                <Column></Column>
            </Row>
        </Container>
    );
}

export default ArticleHeader;
