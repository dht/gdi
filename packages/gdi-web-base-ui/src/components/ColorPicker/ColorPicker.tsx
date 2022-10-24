import React, { useCallback, useRef, useState } from 'react';
import { Container, Rect, PickerWrapper } from './ColorPicker.style';
import { ColorPicker as ColorPickerFluent } from '@fluentui/react';
import { useClickAway, useToggle } from 'react-use';

export type ColorPickerProps = {
    color: string;
    size?: number;
    style: React.CSSProperties;
    onChange: (newValue: string) => void;
};

export function ColorPicker(props: ColorPickerProps) {
    const { size = 20, style: containerStyle } = props;
    const [color, setColor] = useState(props.color);
    const [showPicker, setShowPicker] = useToggle(false);

    const ref = useRef(null);

    const closePicker = useCallback(() => {
        setShowPicker(false);
        props.onChange(color);
    }, [color]);

    useClickAway(ref, () => {
        if (showPicker) {
            closePicker();
        }
    });

    const onRectClick = useCallback(
        (ev: React.MouseEvent) => {
            ev.stopPropagation();

            if (showPicker) {
                closePicker();
            } else {
                setShowPicker(true);
            }
        },
        [showPicker]
    );

    function renderPicker() {
        if (!showPicker) {
            return null;
        }

        return (
            <PickerWrapper>
                <ColorPickerFluent
                    color={color}
                    componentRef={ref}
                    onChange={(ev, color) => {
                        ev.stopPropagation();
                        setColor('#' + color.hex);
                    }}
                />
            </PickerWrapper>
        );
    }

    const style = {
        backgroundColor: color ?? 'transparent',
    };

    return (
        <Container
            className='ColorPicker-container'
            data-testid='ColorPicker-container'
            style={containerStyle}
        >
            <Rect size={size} style={style} onClick={onRectClick} />
            {renderPicker()}
        </Container>
    );
}
