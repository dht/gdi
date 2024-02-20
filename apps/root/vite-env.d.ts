/// <reference types="vite/client" />

interface ImportMeta {
    env: {
        VITE_API_URL: string;
        FIREBASE_API_KEY: string;
        FIREBASE_AUTH_DOMAIN: string;
        FIREBASE_DATABASE_URL: string;
        FIREBASE_PROJECT_ID: string;
        FIREBASE_STORAGE_BUCKET: string;
        FIREBASE_MESSAGING_SENDER_ID: string;
        FIREBASE_APP_ID: string;
        FIREBASE_MEASUREMENT_ID: string;
    };
}

/// <reference types="@modyfi/vite-plugin-yaml/modules" />
