export const itemStructure = `export type ICampaign = {
    id: string;
    startDate: string;
    endDate?: string;
    completedDate: string;
    title: string;
    description: string;
    status: ICampaignStatus;
    source: ICampaignSource;
    tags: string[];
    dataTags: string[];
    budget: number;
    budgetSpent: number;
    metrics: ICampaignMetric[];
    externalCampaignUrl: string;
    destinationUrl: string;
    metricsData?: Partial<IMetricsData>;
};
`;
