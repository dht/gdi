import React from 'react';
import {
    Author,
    AuthorName,
    Container,
    Description,
    Image,
    Title,
} from './Article.style';
import { useMeasure } from 'react-use';
import classnames from 'classnames';
import Decoration from '../../components/Decoration/Decoration';

export const id = 'com.usegdi.templates.tech.article-hero';

export type ArticleProps = {
    sequence?: number;
    strings: ArticleStrings;
    colors: ArticleColors;
    extra: ArticleExtra;
};

export type ArticleStrings = {};

export type ArticleColors = {};

export type ArticleExtra = {
    index: number;
    totalWidth: number;
    article: IArticle;
};

export function Article(props: ArticleProps) {
    const { extra } = props;
    const { article, totalWidth, index } = extra;
    const { title, imageUrl, authorName } = article ?? {};
    const [ref, { width }] = useMeasure<HTMLDivElement>();

    const percent = 100 * (width / totalWidth);
    const flavour = percent > 65 ? 'large' : percent > 32 ? 'medium' : 'small';

    const className = classnames('Article-container', flavour);

    const style = {
        backgroundImage: `url(${imageUrl})`,
    };

    return (
        <Container
            className={className}
            data-testid='Article-container'
            ref={ref}
        >
            <Image className='image' style={style}>
                <Decoration pink={index === 3} />
            </Image>
            <Description className='description'>
                <Title className='title'>{title}</Title>
                <Author className='author'>
                    By <AuthorName>{authorName}</AuthorName>
                </Author>
            </Description>
        </Container>
    );
}

export default Article;
