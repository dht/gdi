import { IFirebaseConfig } from '@gdi/platformer';

const accountsCount = import.meta.env.VITE_FIREBASE_ACCOUNTS;

accountsCount;

const configs: IFirebaseConfig[] = [];

for (let i = 1; i <= accountsCount; i++) {
    configs.push({
        title: import.meta.env[`VITE_FIREBASE_TITLE_${i}`],
        description: import.meta.env[`VITE_FIREBASE_DESCRIPTION_${i}`],
        apiKey: import.meta.env[`VITE_FIREBASE_API_KEY_${i}`],
        authDomain: import.meta.env[`VITE_FIREBASE_AUTH_DOMAIN_${i}`],
        databaseURL: import.meta.env[`VITE_FIREBASE_DATABASE_URL_${i}`],
        projectId: import.meta.env[`VITE_FIREBASE_PROJECT_ID_${i}`],
        storageBucket: import.meta.env[`VITE_FIREBASE_STORAGE_BUCKET_${i}`],
        messagingSenderId: import.meta.env[
            `VITE_FIREBASE_MESSAGING_SENDER_ID_${i}`
        ],
        appId: import.meta.env[`VITE_FIREBASE_APP_ID_${i}`],
        measurementId: import.meta.env[`VITE_FIREBASE_MEASUREMENT_ID_${i}`],
    });
}

export const firebaseConfigs = configs;
