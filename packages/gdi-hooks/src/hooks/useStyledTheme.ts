import { useEffect, useMemo, useState } from 'react';
import { useWindowSize } from 'react-use';
import {
    getCurrentBreakpoint,
    getCurrentBreakpointByResolutionId,
} from '../utils/breakpoints';
import { breakpoints } from '../utils/breakpoints.data';
import { useCustomEvent } from './useCustomEvent';

export function useStyledTheme(languageCode: string, isRtl: boolean) {
    const { width } = useWidth();

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

                return {
                    padding: `${parts[0]} ${parts[3]} ${parts[2]} ${parts[1]}`,
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

                return {
                    margin: `${parts[0]} ${parts[3]} ${parts[2]} ${parts[1]}`,
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
            languageCode,
            fontFamily: isRtl
                ? "font-family: 'Heebo', Courier, monospace;"
                : "'Encode Sans', Courier, monospace;",
            isRtl,
        };
    }, [isRtl, breakpoint]);

    return theme;
}

export function useWidth() {
    const { width: windowWidth } = useWindowSize();
    const [width, setWidth] = useState(windowWidth);

    useEffect(() => {
        setWidth(windowWidth);
    }, [windowWidth]);

    useCustomEvent('force-width', (data: Json) => {
        setWidth(data.width);
    });

    useCustomEvent('force-width-mobile', () => {
        setWidth(380);
    });

    useCustomEvent('force-width-clear', () => {
        setWidth(windowWidth);
    });

    return { width };
}
