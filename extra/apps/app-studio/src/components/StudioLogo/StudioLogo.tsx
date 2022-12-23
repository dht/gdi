import React from 'react';
import { useLanguage } from '@gdi/language';
import { Icon } from '@gdi/web-ui';
import {
    Arrow,
    Arrows,
    Content,
    Flavour,
    GDI,
    Text,
    Wrapper,
} from './StudioLogo.style';

export type StudioLogoProps = {
    onNext: () => void;
    onPrevious: () => void;
    boardId: string;
};

export function StudioLogo(props: StudioLogoProps) {
    const { boardId } = props;

    const { t } = useLanguage();

    const srcFlavour = `/studio-logo-${boardId}.png`;

    return (
        <Wrapper
            className='StudioLogo-wrapper'
            data-testid='StudioLogo-wrapper'
            // style={style}
            onClick={props.onNext}
        >
            <Arrows>
                <Arrow>
                    <Icon
                        iconName='ChevronLeft'
                        onClick={(ev) => {
                            ev.stopPropagation();
                            props.onPrevious();
                        }}
                    />
                </Arrow>
                <Arrow>
                    <Icon
                        iconName='ChevronRight'
                        onClick={(ev) => {
                            ev.stopPropagation();
                            props.onNext();
                        }}
                    />
                </Arrow>
            </Arrows>
            <Content>
                <Text>{t('Studio')}</Text>
                <Flavour src={srcFlavour} />
                <GDI />
            </Content>
        </Wrapper>
    );
}

export default StudioLogo;
