import React, { useState } from 'react';
import {
    Cards,
    Header,
    Image,
    Title,
    V,
    Wrapper,
    WrapperCard,
} from './ToggleCards.style';
import { SocialIcon } from 'react-social-icons';
import { Icon } from '@gdi/web-ui';
import classnames from 'classnames';

export type ToggleCardsProps = {
    cards: Json[];
};

export function ToggleCards(props: ToggleCardsProps) {
    const { cards } = props;

    function renderCard(card: Json) {
        return <ToggleCard key={card.id} card={card} />;
    }

    function renderCards() {
        return cards.map((card: Json) => renderCard(card));
    }

    return (
        <Wrapper
            className='ToggleCards-wrapper'
            data-testid='ToggleCards-wrapper'
        >
            <Cards>{renderCards()}</Cards>
        </Wrapper>
    );
}

export type ToggleCardProps = {
    card: Json;
};

export function ToggleCard(props: ToggleCardProps) {
    const { card } = props;
    const { id, title, imageUrl, iconUrl } = card;
    const [grayscale, setGrayscale] = useState(true);

    const className = classnames('ToggleCard-wrapper', {
        grayscale,
    });

    function onClick() {
        setGrayscale(!grayscale);
    }

    return (
        <WrapperCard
            className={className}
            data-testid='ToggleCard-wrapper'
            onClick={onClick}
        >
            <Image>
                <SocialIcon url={`https://${id}`} />
            </Image>
            <Header>
                <Title>{title}</Title>
            </Header>
            <V className='v'>
                <Icon iconName='SkypeCircleCheck' />
            </V>
        </WrapperCard>
    );
}

export default ToggleCards;
