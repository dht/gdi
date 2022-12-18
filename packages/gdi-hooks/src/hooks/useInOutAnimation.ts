import React, { useCallback, useEffect } from 'react';
import { useList, useMount, useSetState } from 'react-use';

type InAnimation = AnimationAttention | AnimationEntrance | AnimationSpecial;
type OutAnimation = AnimationAttention | AnimationExit | AnimationSpecial;

type Options = {
    inAnimation: InAnimation;
    outAnimation: OutAnimation;
    onClose: () => void;
};

export function useInOutAnimation(
    isReady: boolean,
    options?: Partial<Options>
): Return {
    const { inAnimation = 'bounceIn', outAnimation = 'bounceOut' } =
        options ?? {};

    const inAnimationClass = `animate__${inAnimation}`;
    const outAnimationClass = `animate__${outAnimation}`;

    const [state, patch] = useSetState<Json>({
        animate__animated: true,
    });

    useEffect(() => {
        if (!isReady) {
            return;
        }

        patch({
            [inAnimationClass]: true,
            [outAnimationClass]: false,
        });
    }, [isReady]);

    const output = Object.keys(state)
        .filter((key) => state[key])
        .join(' ');

    const onClose = useCallback(() => {
        patch({
            [inAnimationClass]: false,
            [outAnimationClass]: true,
        });
    }, []);

    return [output, { onClose }];
}

type Return = [string, { onClose: () => void }];

type AnimationAttention =
    | 'bounce'
    | 'flash'
    | 'pulse'
    | 'rubberBand'
    | 'shakeX'
    | 'shakeY'
    | 'headShake'
    | 'swing'
    | 'tada'
    | 'wobble'
    | 'jello'
    | 'heartBeat';

type AnimationEntrance =
    | 'backInDown'
    | 'backInLeft'
    | 'backInRight'
    | 'backInUp'
    | 'Back exits'
    | 'bounceIn'
    | 'bounceInDown'
    | 'bounceInLeft'
    | 'bounceInRight'
    | 'bounceInUp'
    | 'fadeIn'
    | 'fadeInDown'
    | 'fadeInDownBig'
    | 'fadeInLeft'
    | 'fadeInLeftBig'
    | 'fadeInRight'
    | 'fadeInRightBig'
    | 'fadeInUp'
    | 'fadeInUpBig'
    | 'fadeInTopLeft'
    | 'fadeInTopRight'
    | 'fadeInBottomLeft'
    | 'fadeInBottomRight'
    | 'flip'
    | 'flipInX'
    | 'flipInY'
    | 'Lightspeed'
    | 'lightSpeedInRight'
    | 'lightSpeedInLeft'
    | 'lightSpeedOutRight'
    | 'lightSpeedOutLeft'
    | 'rotateIn'
    | 'rotateInDownLeft'
    | 'rotateInDownRight'
    | 'rotateInUpLeft'
    | 'rotateInUpRight'
    | 'zoomIn'
    | 'zoomInDown'
    | 'zoomInLeft'
    | 'zoomInRight'
    | 'zoomInUp'
    | 'slideInDown'
    | 'slideInLeft'
    | 'slideInRight'
    | 'slideInUp';

export type AnimationExit =
    | 'rotateOutDownLeft'
    | 'rotateOutDownRight'
    | 'rotateOutUpLeft'
    | 'rotateOutUpRight'
    | 'fadeOut'
    | 'fadeOutDown'
    | 'fadeOutDownBig'
    | 'fadeOutLeft'
    | 'fadeOutLeftBig'
    | 'fadeOutRight'
    | 'fadeOutRightBig'
    | 'fadeOutUp'
    | 'fadeOutUpBig'
    | 'fadeOutTopLeft'
    | 'fadeOutTopRight'
    | 'fadeOutBottomRight'
    | 'fadeOutBottomLeft'
    | 'zoomOut'
    | 'zoomOutDown'
    | 'zoomOutLeft'
    | 'zoomOutRight'
    | 'zoomOutUp'
    | 'slideOutDown'
    | 'slideOutLeft'
    | 'slideOutRight'
    | 'slideOutUp'
    | 'backOutDown'
    | 'backOutLeft'
    | 'backOutRight'
    | 'backOutUp'
    | 'bounceOut'
    | 'bounceOutDown'
    | 'bounceOutLeft'
    | 'bounceOutRight'
    | 'bounceOutUp'
    | 'flipOutX'
    | 'flipOutY';

export type AnimationSpecial = 'hinge' | 'jackInTheBox' | 'rollIn' | 'rollOut';
