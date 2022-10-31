import { useMemo } from 'react';

export function useTheme(languageCode: string, isRtl: boolean) {
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
            languageCode,
            fontFamily: isRtl
                ? "font-family: 'Heebo', Courier, monospace;"
                : "'Encode Sans', Courier, monospace;",
            isRtl,
        };
    }, [isRtl]);

    return theme;
}
