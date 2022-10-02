// AUTO-GENERATED

export const A6 = {};

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
        shortDescription: string;
        dateOfBirth?: string;
        imageUrl?: string;
        thumbUrl?: string;
        socialTwitterUrl?: string;
        socialFacebookUrl?: string;
        socialInstagramUrl?: string;
        socialLinkedInUrl?: string;
        pinterestUrl?: string;
        wikipediaUrl?: string;
        website?: string;
        phoneNumber?: string;
        images?: string[];
        email?: string;
        notes?: string;
        height?: number;
        netWorth?: number;
        company?: string;
        jobTitle?: string;
        tags: string[];
        tier?: number;
        gender?: string;
        category: string;
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

    export type ISelectOpion = {
        key: string;
        text: string;
    };

    export type ISelectOptions = ISelectOpion[];

    export type IAllSelectOptions = Record<string, ISelectOptions>;
}
