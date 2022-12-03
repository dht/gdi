import React from 'react';
import { IUnoSection } from '../../types';
import Rating from '../Rating/Rating';
import { UnoButton } from '../UnoButton/UnoButton';
import UnoLink from '../UnoLink/UnoLink';
import { TrianglesBk } from '@gdi/web-ui';
import {
    AuthorLine,
    Category,
    Column,
    Wrapper,
    Divider,
    Downloads,
    H1,
    RatingLine,
    Thumb,
} from './UnoHeader.style';
import bytes from 'bytes';
import { useLanguage } from '@gdi/language';

export type UnoHeaderProps = {
    section: IUnoSection;
    data: Json;
};

export function UnoHeader(props: UnoHeaderProps) {
    const { data } = props;
    const {
        ctaText,
        ctaUrl,
        thumbUrl,
        header,
        author,
        authorUrl,
        rating,
        category,
        downloads,
    } = data;

    const { n } = useLanguage();

    const nouns = [
        ['one', 'download'],
        ['two', 'downloads'],
        ['few', 'download'],
        ['other', 'download'],
    ];

    return (
        <Wrapper className='UnoHeader-wrapper' data-testid='UnoHeader-wrapper'>
            <Column>{/* <Thumb src={thumbUrl} /> */}</Column>
            <Column flex>
                <H1>{header}</H1>
                <AuthorLine>
                    <UnoLink href={authorUrl} iconName='link'>
                        {author}
                    </UnoLink>
                </AuthorLine>
                <RatingLine>
                    <Rating value={rating} />
                    <Divider />
                    <Category>{category}</Category>
                    <Divider />
                    <Downloads>{n.cardinal(downloads, nouns)}</Downloads>
                </RatingLine>
            </Column>
            <Column>
                <UnoButton href={ctaUrl}>{ctaText}</UnoButton>
            </Column>
        </Wrapper>
    );
}

export default UnoHeader;
