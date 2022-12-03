import React, { useEffect, useRef, useState } from 'react';
import { useMeasure } from 'react-use';
import { Background, Wrapper, Content } from './Layered.style';

export type LayeredProps = {
    degree?: number;
    children: React.ReactNode[];
};

export function Layered(props: LayeredProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { degree, children } = props;
    const [height, setHeight] = useState(0);
    const [dx, setDx] = useState(0);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const { clientWidth, clientHeight } = ref.current
            .parentNode as HTMLDivElement;

        setHeight(clientHeight);
        setDx(Math.sin((degree || 0) * (Math.PI / 180)) * clientWidth);
    });

    function renderBackground() {
        if (children.length <= 1) {
            return null;
        }

        let style: React.CSSProperties = {};

        if (degree) {
            style.transform = `rotate(${degree}deg)`;
            style.left = dx + 'px';
            style.right = dx + 'px';
        }

        return (
            <Background height={height} style={style}>
                {children[0]}
            </Background>
        );
    }

    function renderContent() {
        const contentIndex = children.length <= 1 ? 0 : 1;

        return <Content height={height}>{children[contentIndex]}</Content>;
    }

    return (
        <Wrapper
            className='Layered-wrapper'
            data-testid='Layered-wrapper'
            height={height}
            ref={ref}
        >
            {renderBackground()}
            {renderContent()}
        </Wrapper>
    );
}

export default Layered;
