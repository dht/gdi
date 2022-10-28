export type ICampaignsStore = {
    appStateCampaigns: ICampaignsState;
    campaigns: ICampaigns;
};

export type ICampaignsState = {
    stateKey: string;
};

export type ICampaignStatus = 'pending' | 'running' | 'completed' | 'archived';
export type ICampaignSource = 'facebook' | 'instagram' | 'google' | 'other';
export type ICampaignMetric =
    | 'traffic'
    | 'likes'
    | 'leads'
    | 'sales'
    | 'registrations'
    | 'installations';

export type ICampaign = {
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

export type IMetricsData = Record<ICampaignMetric, number>;

export type ICampaigns = Record<string, ICampaign>;
