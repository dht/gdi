export type IGridItem = {
    id: string;
    isSelected: boolean;
};

export type IGridSelection = Record<string, IGridItem>;

export type IStatGroup = {
    all: number;
    [domain: string]: number;
};

export type IStats = {
    byDays: Record<number, IStatGroup>;
    byWeeks: Record<number, IStatGroup>;
    byQuarters: Record<number, IStatGroup>;
    total: IStatGroup;
};
