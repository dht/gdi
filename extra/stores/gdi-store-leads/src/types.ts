export type ILeadsStore = {
    appStateLeads: ILeadsState;
    leads: ILeads;
};

export type ILeadsState = {
    stateKey: string;
};

export type ILeadStatus = 'active' | 'inactive' | 'lost' | 'sale' | 'pending';

export type ILeadSource = 'campaign' | 'landingPage' | 'manual' | 'other';

export type ILead = {
    id: string;
    title: string;
    leadName: string;
    leadCompanyName: string;
    leadEmail?: string;
    leadPhoneNumber?: string;
    leadNotes?: string;
    source: ILeadSource;
    sourceId?: string;
    status: ILeadStatus;
    statusDate: string;
    endDate?: string;
    description: string;
    personId: string;
    nextVisitDate: string;
    items: ILeadJournal[];
    tags: string[];
    dataTags: string[];
};

export type IJournalType = 'contact' | 'comment';

export type ILeadJournal = {
    id: string;
    entryType: IJournalType;
    entryDate: string;
    description?: string;
    status?: ILeadStatus;
};

export type ILeads = Record<string, ILead>;
