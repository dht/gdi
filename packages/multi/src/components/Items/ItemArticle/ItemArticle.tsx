import { useMeasure } from 'react-use';
import { IArticle } from '../../../types';
import { MasonryItemProps } from '../../Masonry/Masonry';
import { ItemBase } from '../_ItemBase/ItemBase';
import Rating from '../_parts/Rating/Rating';
import { Author, AuthorName, Description, Details, Title } from './ItemArticle.style';
import { useMemo } from 'react';

export type ItemArticleProps = MasonryItemProps & {
  item: IArticle;
};

export function ItemArticle(props: ItemArticleProps) {
  const { item: article } = props;
  const { title, name, authorName, description, stats, style } = article;
  const { height } = style;
  const [ref, { height: heightDetails }] = useMeasure<HTMLDivElement>();

  const topSectionHeight = useMemo(() => {
    return height - heightDetails - 24;
  }, [height, heightDetails]);

  return (
    <ItemBase {...props} backgroundColor='#000' topSectionHeight={topSectionHeight}>
      <Details className='description' ref={ref}>
        <Title className='title'>{title ?? name}</Title>
        <Author className='author'>
          By <AuthorName>{authorName}</AuthorName>
        </Author>
        <Description>{description}</Description>
        <Rating stats={stats} />
      </Details>
    </ItemBase>
  );
}

export default ItemArticle;
