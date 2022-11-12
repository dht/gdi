// AUTO-GENERATED

export const A14 = {};

declare global {
    export type IPplStore = {
        appStatePpl: IPplState;
        persons: IPersons;
    };

    export type IPplState = {
        stateKey: string;
        currentCategory: string;
        currentView: string;
    };

    export type IPerson = {
        id: string;
        key: string;
        firstName: string;
        lastName: string;
        firstNameLocal?: string;
        lastNameLocal?: string;
        shortDescription: string;
        relations?: string;
        dateOfBirth?: string;
        imageUrl?: string;
        imageThumbUrl?: string;
        ratio: number;
        socialTwitterUrl?: string;
        socialFacebookUrl?: string;
        socialInstagramUrl?: string;
        socialLinkedInUrl?: string;
        pinterestUrl?: string;
        wikipediaUrl?: string;
        website?: string;
        hometown?: string;
        city?: string;
        phoneNumber?: string;
        nationality?: string;
        items: IImage[];
        email?: string;
        notes?: string;
        height?: number;
        netWorth?: number;
        company?: string;
        jobTitle?: string;
        tags: string[];
        dataTags: string[];
        tier?: number;
        gender?: string;
        category: string;

        // transient
        fullName?: string;
    };

    export type IDataField = {
        id: string;
        key: string;
        fieldType: string;
        fieldOptions: string[];
    };

    export type IDataPoint = {
        id: string;
        key: string;
        fieldType: string;
        fieldOptions: string[];
    };

    export type IPersons = Record<string, IPerson>;

    export type IAllSelectOptions = Record<string, IOptions>;
}
