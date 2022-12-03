import React, { useRef, useContext } from 'react';
import {
    Author,
    AuthorName,
    Column,
    Wrapper,
    Separator,
    ImageSource,
    Content,
    DateText,
    Details,
    Image,
    ImageDescription,
    Intro,
    Row,
    Title,
    Gap,
    ContainerBreadcrumbs,
    Breadcrumb,
    Line,
    ContainerShare,
} from './ArticleEditorTop.style';
import { SocialIcon } from '@gdi/web-ui';
import { ArticleContext } from '../ArticleEditor/ArticleEditor.context';
import { dateShort } from '@gdi/language';

export type ArticleEditorTopProps = {
    children: JSX.Element;
};

export function ArticleEditorTop(props: ArticleEditorTopProps) {
    const ref = useRef(null);
    const refTitle = useRef<HTMLHeadingElement>(null);
    const refIntro = useRef<HTMLDivElement>(null);
    const context = useContext(ArticleContext);
    const { title, intro, article } = context;
    const {
        authorName,
        imageUrl,
        imageDescription,
        imageSource,
        publishDate,
        categoryBreadcrumbs,
    } = article;

    const date = dateShort(publishDate);

    function onTitleChange() {
        if (refTitle.current) {
            context.onTitleChange(refTitle.current.innerText);
        }
    }

    function onIntroChange() {
        if (refIntro.current) {
            context.onIntroChange(refIntro.current.innerText);
        }
    }

    return (
        <Wrapper
            className='ArticleEditorTop-wrapper'
            data-testid='ArticleEditorTop-wrapper'
        >
            <Content>
                <Breadcrumbs
                    value={categoryBreadcrumbs}
                    onClick={context.onCategoryClick}
                />
                <Title
                    ref={refTitle}
                    contentEditable={true}
                    onBlur={onTitleChange}
                    suppressContentEditableWarning={true}
                >
                    {title}
                </Title>

                <p ref={ref} />

                <Row>
                    <Column>
                        <Intro
                            ref={refIntro}
                            contentEditable={true}
                            onBlur={onIntroChange}
                            suppressContentEditableWarning={true}
                        >
                            {intro}
                        </Intro>
                        <Details>
                            <Author>
                                By
                                <AuthorName>{authorName}</AuthorName>
                            </Author>
                            <Separator> | </Separator>
                            <DateText>{date}</DateText>
                        </Details>
                        <Share />
                        <Image onClick={context.onImageClick} src={imageUrl} />
                        <ImageDescription>
                            {imageDescription}
                            <Separator> | </Separator>
                            <ImageSource>Image: {imageSource}</ImageSource>
                        </ImageDescription>
                        <Gap />
                        {props.children}
                    </Column>
                    <Column></Column>
                </Row>
            </Content>
        </Wrapper>
    );
}

type BreadcrumbsProps = {
    value: string;
    onClick: () => void;
};

export function Breadcrumbs(props: BreadcrumbsProps) {
    const { value: categoryBreadcrumbs = '' } = props;

    const parts = categoryBreadcrumbs.split('>');

    function renderPart(part: string) {
        return (
            <React.Fragment key={part}>
                <Breadcrumb>{part}</Breadcrumb>
                <Line />
            </React.Fragment>
        );
    }

    function renderParts() {
        return parts.map((part: string) => renderPart(part));
    }

    return (
        <ContainerBreadcrumbs
            className='Breadcrumbs-wrapper'
            data-testid='Breadcrumbs-wrapper'
            onClick={props.onClick}
        >
            {renderParts()}
        </ContainerBreadcrumbs>
    );
}

export function Share(_props: any) {
    return (
        <ContainerShare className='Share-wrapper' data-testid='Share-wrapper'>
            <SocialIcon url='https://www.facebook.com/sharer/sharer.php?u=https://www.google.com' />
            <SocialIcon url='http://twitter.com/share?text=article text&url=https://www.google.com' />
            <SocialIcon url='https://api.whatsapp.com/send?text=https://www.google.com' />
        </ContainerShare>
    );
}

export default ArticleEditorTop;
