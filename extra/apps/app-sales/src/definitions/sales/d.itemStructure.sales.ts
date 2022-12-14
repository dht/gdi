export const itemStructure = `export type ISale = {
    id: string;
    title: string;
    startDate: string;
    saleType: ISaleType;
    status: ISaleStatus;
    statusDate: string;
    endDate?: string;
    description: string;
    personId: string;
    nextVisitDate: string;
    items: ISaleJournal[];
    worth?: number;
    percent?: number;
    isArchived?: boolean;
    isSuccessful?: boolean;
    isLost?: boolean;
    tags: string[];
    dataTags: string[];
};
`;
