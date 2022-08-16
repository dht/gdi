type CliDb = {
    staging: {
        baseUrl: string;
        adminEmail: string;
        adminPassword: string;
        smsCode: string;
        phoneNumber: string;
        localUserEmail: string;
        newUserEmailPattern: string;
        newUserEmailPatternNextNumber: number;
    };
    context: {
        currentCompany: number;
        currentUser: string;
    };
    companies: [
        {
            id: number;
            email: string;
            companyName: string;
        }
    ];
    users: [
        {
            id: string;
            companyId: number;
            email: string;
            password: string;
            isAdmin: boolean;
            isAccountant: boolean;
        }
    ];
    tokens: [
        {
            id: string;
            jwt: string;
            mobile: string;
            refresh: string;
            fcm: string;
            csrf: string;
        }
    ];
};

export const DEFAULT_BASE_URL = 'https://stage.glicard.com';
export const DEFAULT_SMS_CODE = '270485';
export const DEFAULT_PASSWORD = 'Password1!';
export const DEFAULT_PHONE_NUMBER = '050-5000000';
export const DEFAULT_NEXT_ID = '50';

export const clearDb = (values: CliDb) => {
    const output: any = { ...values };

    output['staging'] = {};
    output['context'] = {};
    output['companies'] = [];
    output['users'] = [];
    output['tokens'] = [];

    return output;
};

export const defaultValues: CliDb = {
    staging: {
        baseUrl: 'https://stage.glicard.com',
        adminEmail: 'guy+adminovsky@glicard.com',
        adminPassword: 'mbj7drk3AVY5xbk@mva',
        smsCode: '270485',
        phoneNumber: '050-0000000',
        localUserEmail: 'guy@glicard.com',
        newUserEmailPattern: 'guy+@glicard.com',
        newUserEmailPatternNextNumber: 50,
    },
    context: {
        currentCompany: 100,
        currentUser: 'guy+adminovsky@glicard.com',
    },
    companies: [
        {
            id: 100,
            email: 'company2@example.com',
            companyName: 'Good',
        },
    ],
    users: [
        {
            id: 'guy+adminovsky@glicard.com',
            companyId: 100,
            email: '',
            password: '',
            isAdmin: true,
            isAccountant: true,
        },
    ],
    tokens: [
        {
            id: 'guy+adminovsky@glicard.com',
            jwt: '',
            mobile: '',
            refresh: '',
            fcm: '',
            csrf: '',
        },
    ],
};
