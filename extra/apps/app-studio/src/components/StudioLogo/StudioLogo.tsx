import { Icon } from '@gdi/web-ui';
import React from 'react';
import { Arrow, Arrows, Wrapper } from './StudioLogo.style';

export type StudioLogoProps = {
    onNext: () => void;
    onPrevious: () => void;
    boardId: string;
};

export function StudioLogo(props: StudioLogoProps) {
    const { boardId } = props;

    const style: React.CSSProperties = {
        backgroundImage: `url(/studio-logo-${boardId}.png)`,
    };

    return (
        <Wrapper
            className='StudioLogo-wrapper'
            data-testid='StudioLogo-wrapper'
            style={style}
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
        </Wrapper>
    );
}

export default StudioLogo;
