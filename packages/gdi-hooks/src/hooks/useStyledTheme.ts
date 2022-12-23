import { useMemo, useState } from 'react';
import { useWindowSize } from 'react-use';
import {
    getCurrentBreakpoint,
    getCurrentBreakpointByResolutionId,
} from '../utils/breakpoints';
import { breakpoints } from '../utils/breakpoints.data';
import { useCustomEvent } from './useCustomEvent';
import classnames from 'classnames';

export function useStyledTheme(
    languageCode: string,
    isRtl: boolean,
    bpMax: IResolution = 'HD+'
) {
    const { width, height } = useWidthHeight();
    const [maxResolution, setMaxResolution] = useState<IResolution>(bpMax);

    const breakpoint = useMemo(() => {
        return getCurrentBreakpoint(breakpoints, width);
    }, [width]);

    const theme = useMemo(() => {
        return {
            paddingLeft: (value: string | number) => {
                const key = isRtl ? 'paddingRight' : 'paddingLeft';
                return {
                    [key]: value,
                };
            },
            paddingRight: (value: string | number) => {
                const key = isRtl ? 'paddingLeft' : 'paddingRight';
                return {
                    [key]: value,
                };
            },
            marginLeft: (value: string | number) => {
                const key = isRtl ? 'marginRight' : 'marginLeft';
                return {
                    [key]: value,
                };
            },
            marginRight: (value: string | number) => {
                const key = isRtl ? 'marginLeft' : 'marginRight';
                return {
                    [key]: value,
                };
            },
            borderLeft: (value: string | number) => {
                const key = isRtl ? 'borderRight' : 'borderLeft';
                return {
                    [key]: value,
                };
            },
            borderRight: (value: string | number) => {
                const key = isRtl ? 'borderLeft' : 'borderRight';
                return {
                    [key]: value,
                };
            },
            left: (value: string | number) => {
                const key = isRtl ? 'right' : 'left';
                return {
                    [key]: value,
                };
            },
            right: (value: string | number) => {
                const key = isRtl ? 'left' : 'right';
                return {
                    [key]: value,
                };
            },
            padding: (value: string | number) => {
                const parts = String(value).split(' ');

                if (typeof value === 'number' || !isRtl || parts.length <= 2) {
                    return {
                        padding: value,
                    };
                }

                if (parts.length === 3) {
                    parts.push('0');
                }

                if (isRtl) {
                    const temp = parts[1];
                    parts[1] = parts[3];
                    parts[3] = temp;
                }

                return {
                    padding: `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]}`,
                };
            },
            margin: (value: string | number) => {
                const parts = String(value).split(' ');

                if (typeof value === 'number' || !isRtl || parts.length <= 2) {
                    return {
                        margin: value,
                    };
                }

                if (parts.length === 3) {
                    parts.push('0');
                }

                if (isRtl) {
                    const temp = parts[1];
                    parts[1] = parts[3];
                    parts[3] = temp;
                }

                return {
                    margin: `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]}`,
                };
            },
            borderRadius: (value: string | number) => {
                const parts = String(value).split(' ');

                if (typeof value === 'number' || !isRtl || parts.length <= 2) {
                    return {
                        borderRadius: value,
                    };
                }

                if (parts.length === 3) {
                    parts.push('0');
                }

                if (isRtl) {
                    const temp = parts[1];
                    parts[1] = parts[3];
                    parts[3] = temp;
                }

                return {
                    borderRadius: `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]}`,
                };
            },
            floatLeft: () => {
                const value = isRtl ? 'right' : 'left';

                return {
                    float: value,
                };
            },
            floatRight: () => {
                const value = isRtl ? 'left' : 'right';

                return {
                    float: value,
                };
            },
            flexDirection: () => {
                const value = isRtl ? 'row-reverse' : 'row';

                return {
                    flexDirection: value,
                };
            },
            direction: (addImportant: boolean) => {
                const value = isRtl ? 'rtl' : 'ltr';
                const suffix = addImportant ? ' !important' : '';

                return {
                    direction: [value, suffix].join(' '),
                };
            },
            vh: (value: number) => {
                const parsedHeight = Math.floor((value / 100) * height);
                return `${parsedHeight}px`;
            },
            vw: (value: number) => {
                const parsedWidth = Math.floor((value / 100) * width);
                return `${parsedWidth}px`;
            },
            bpText: () => {
                if (!breakpoint || !breakpoint.breakpoint) {
                    return;
                }

                const { breakpoint: bp } = breakpoint;

                return `${bp.id} ${bp.containerWidth}px`;
            },
            bpId: () => {
                if (!breakpoint || !breakpoint.breakpoint) {
                    return;
                }

                const { breakpoint: bp } = breakpoint;
                const { id } = bp;

                return '_' + id.replace('+', 'plus');
            },
            bpMaxId: () => {
                return '_' + maxResolution.replace('+', 'plus') + '-max';
            },
            device: (
                resolutionId: IResolution,
                css: React.CSSProperties,
                orLower: boolean = true
            ) => {
                const bp = getCurrentBreakpointByResolutionId(
                    breakpoints,
                    resolutionId
                );

                if (!bp || !breakpoint) {
                    return;
                }

                const isEqual = bp.index === breakpoint.index;
                const isLower = bp.index > breakpoint.index;

                if (isEqual || (isLower && orLower)) {
                    return css;
                }
            },
            backgroundImageRtl: (url: string, urlRtl: string) => {
                const value = isRtl ? urlRtl : url;

                return {
                    backgroundImage: `url(${value})`,
                };
            },
            animationNameRtl: (name: string, nameRtl: string) => {
                const value = isRtl ? nameRtl : name;

                return {
                    animationName: value,
                };
            },
            cssAnimationRtl: (animation: string) => {
                if (!isRtl) {
                    return animation;
                }

                return animation
                    .replace('Left', 'TMP')
                    .replace('Right', 'Left')
                    .replace('TMP', 'Right');
            },
            rtl: () => {
                return isRtl;
            },
            languageCode,
            fontFamily: isRtl
                ? "font-family: 'Heebo', Courier, monospace;"
                : "'Encode Sans', Courier, monospace;",
            isRtl,
        };
    }, [isRtl, breakpoint, width, height]);

    return theme;
}

type WidthMode = 'none' | 'mobile' | 'desktop';

export function useWidthHeight() {
    const { width, height } = useWindowSize();
    const [mode, setMode] = useState<WidthMode>('none');

    useCustomEvent('force-dimensions-mobile', () => {
        setMode('mobile');
    });

    useCustomEvent('force-dimensions-desktop', () => {
        setMode('desktop');
    });

    useCustomEvent('force-dimensions-clear', () => {
        setMode('none');
    });

    const output = useMemo(() => {
        if (mode === 'none') {
            return {
                width,
                height,
            };
        } else if (mode === 'mobile') {
            return {
                width: 380,
                height: 765,
            };
        } else if (mode === 'desktop') {
            return {
                width: 1440,
                height: 940,
            };
        }
    }, [mode, width, height]);

    return output as { width: number; height: number };
}
