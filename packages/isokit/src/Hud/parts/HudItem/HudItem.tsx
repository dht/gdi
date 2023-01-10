import classnames from 'classnames';
import React, { useContext } from 'react';
import { HudContext } from '../../Hud.context';
import { HudRect } from '../HudRect/HudRect';
import { IHudItemWithPoints } from '../../Hud.types';
import { Svg, Text, Wrapper } from './HudItem.style';

export type HudItemProps = {
    item: IHudItemWithPoints;
    isVisible?: boolean;
    isFadingOut?: boolean;
};

export function HudItem(props: HudItemProps) {
    const { item } = props;
    const { state } = useContext(HudContext);
    const { color } = state;

    const { id, text, points, isLeft, isVisible, isFadingOut } = item;

    if (!isVisible) {
        return null;
    }

    const {
        top,
        left,
        width,
        height,
        clockAngle,
        isTextOnBottom,
        x1,
        y1,
        x2,
        y2,
    } = points;

    const style = {
        top: top + 'px',
        left: left + 'px',
        width: width + 'px',
        height: height + 'px',
    };

    const styleSvg = {
        width: width + 20 + 'px',
        height: height + 20 + 'px',
    };

    const className = classnames('HudItem-wrapper', {
        fadeOut: isFadingOut,
    });

    return (
        <Wrapper
            className={className}
            data-testid='HudItem-wrapper'
            color={color}
            style={style}
        >
            <Svg
                style={styleSvg}
                viewBox={`0 0 ${width + 20} ${height + 20}`}
                xmlns='http://www.w3.org/2000/svg'
            >
                <defs>
                    <filter id='blur'>
                        <feGaussianBlur stdDeviation='4' />
                    </filter>
                </defs>
                <HudRect
                    id={id}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    width={width}
                    height={height}
                    clockAngle={clockAngle}
                />
            </Svg>
            <Text color={color} isLeft={isLeft} isTextOnBottom={isTextOnBottom}>
                {text}
            </Text>
        </Wrapper>
    );
}

export default HudItem;
