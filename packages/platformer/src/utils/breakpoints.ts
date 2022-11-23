type BreakpointAndIndex = {
    breakpoint?: IBreakpoint;
    index: number;
};

export const getCurrentBreakpoint = (
    breakpoints: IBreakpoints,
    screenWidth: number
) => {
    const breakpointsArray = Object.values(breakpoints);

    const index = breakpointsArray.findIndex((bp) => {
        return (
            bp.minWidth <= screenWidth &&
            (!bp.maxWidth || bp.maxWidth > screenWidth)
        );
    });

    if (index >= 0) {
        return {
            breakpoint: breakpointsArray[index],
            index,
        } as BreakpointAndIndex;
    }

    return null;
};

export const getCurrentBreakpointByResolutionId = (
    breakpoints: IBreakpoints,
    resolutionId: string
) => {
    const breakpointsArray = Object.values(breakpoints);

    const index = breakpointsArray.findIndex((bp) => {
        return bp.id === resolutionId;
    });

    if (index >= 0) {
        return {
            breakpoint: breakpointsArray[index],
            index,
        } as BreakpointAndIndex;
    }

    return null;
};
