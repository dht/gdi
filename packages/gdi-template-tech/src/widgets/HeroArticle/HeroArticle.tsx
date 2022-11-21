import React from 'react';
import {
    Author,
    AuthorName,
    Container,
    Description,
    Image,
    Title,
} from './HeroArticle.style';
import { useMeasure } from 'react-use';
import classnames from 'classnames';
import Decoration from '../../components/Decoration/Decoration';

export const id = 'com.usegdi.templates.gdi.heroArticle-basic';

export type HeroArticleProps = {
    article: any;
    index: number;
    totalWidth: number;
};

export function HeroArticle(props: HeroArticleProps) {
    const { article, totalWidth, index } = props;
    const { title, imageUrl, authorName } = article;
    const [ref, { width }] = useMeasure<HTMLDivElement>();

    const percent = 100 * (width / totalWidth);
    const flavour = percent > 65 ? 'large' : percent > 32 ? 'medium' : 'small';

    const className = classnames('HeroArticle-container', flavour);

    const style = {
        backgroundImage: `url(${imageUrl})`,
    };

    return (
        <Container
            className={className}
            data-testid='HeroArticle-container'
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

export default HeroArticle;
