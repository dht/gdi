// AUTO-GENERATED

export const A12 = {};

declare global {
    export type ISalesStore = {
        meta: IGdiMeta;
        appStateSales: ISalesState;
        sales: ISales;
    };

    export type ISalesState = {
        stateKey: string;
        currentCategory: string;
        currentView: string;
    };

    export type ISaleStatus =
        | 'active'
        | 'inactive'
        | 'lost'
        | 'sold'
        | 'pending';

    export type ISaleType =
        | 'lead'
        | 'customer'
        | 'prospect'
        | 'opportunity'
        | 'cooperation';

    export type ISaleMedium =
        | 'zoom'
        | 'googleMeet'
        | 'email'
        | 'phone'
        | 'inPerson'
        | 'other';

    export type IMeetingLocation =
        | 'online'
        | 'office'
        | 'venue'
        | 'home'
        | 'event'
        | 'conference'
        | 'other';

    export type ISale = {
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

    export type IJournalType = 'contact' | 'comment';

    export type ISaleMeeting = {
        medium: ISaleMedium;
        locationType: IMeetingLocation;
        meetingDate?: string;
        meetingTime?: string;
        personId?: string;
        locationUrl?: string;
        location: string;
        googleCalendarEventId?: string;
    };

    export type ISaleComment = {
        status: ISaleStatus;
        description?: string;
    };

    export type ISaleJournal = Partial<ISaleMeeting> &
        Partial<ISaleComment> & {
            id: string;
            entryType: IJournalType;
            entryDate: string;
        };

    export type ISales = Record<string, ISale>;
}
