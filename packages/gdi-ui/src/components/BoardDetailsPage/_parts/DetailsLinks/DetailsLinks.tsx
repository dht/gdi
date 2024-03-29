import classnames from 'classnames';
import { links } from './DetailsLinks.data';
import {
  Link,
  LinkDetails,
  LinkIcon,
  LinkSubtitle,
  LinkTitle,
  Wrapper,
} from './DetailsLinks.style';
import Icon from '../../../Icon/Icon';

export type DetailsLinksProps = {
  board: any;
  onAction: (action: any) => void;
};

export function DetailsLinks(props: DetailsLinksProps) {
  const { board } = props;

  function renderLink(link: Json) {
    const { id, iconName, title, subtitle } = link;
    const to = (board as any)[id + 'Url'];

    const className = classnames('link', {
      disabled: !to,
    });

    return (
      <Link
        key={link.id}
        className={className}
        onClick={() =>
          props.onAction({
            type: 'HOME',
            verb: link.id,
            id: board.id,
          })
        }
      >
        <LinkIcon>
          <Icon name={iconName} size={30} />
        </LinkIcon>
        <LinkDetails>
          <LinkTitle>{title}</LinkTitle>
          <LinkSubtitle>{subtitle}</LinkSubtitle>
        </LinkDetails>
      </Link>
    );
  }

  function renderLinks() {
    return links.map((link: Json) => renderLink(link));
  }

  return (
    <Wrapper className='DetailsLinks-wrapper' data-testid='DetailsLinks-wrapper'>
      {renderLinks()}
    </Wrapper>
  );
}

export default DetailsLinks;
