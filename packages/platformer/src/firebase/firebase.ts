import { initializeApp } from 'firebase/app';
import {
    Analytics,
    getAnalytics,
    logEvent,
    setUserId,
    setUserProperties,
} from 'firebase/analytics';
import { Firestore, getFirestore } from 'firebase/firestore/lite';
import { Auth, getAuth, signInAnonymously } from 'firebase/auth';

export type FirebaseConfig = {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
};

export type EventId =
    | 'ad_impression'
    | 'earn_virtual_currency'
    | 'join_group'
    | 'login'
    | 'purchase'
    | 'refund'
    | 'search'
    | 'select_content'
    | 'share'
    | 'sign_up'
    | 'sign_up_progress'
    | 'spend_virtual_currency'
    | 'tutorial_begin'
    | 'tutorial_complete';

export class Firebase {
    private analytics: Analytics;
    private db: Firestore;
    private auth: Auth;

    public uid: string;

    constructor(firebaseConfig: FirebaseConfig) {
        const app = initializeApp(firebaseConfig);
        this.analytics = getAnalytics(app);
        this.db = getFirestore(app);
        this.auth = getAuth(app);
        this.uid = '';
    }

    log(eventName: EventId, data?: Json) {
        logEvent(this.analytics, eventName as string, data);
    }

    setUserId(userId: string) {
        setUserId(this.analytics, userId);
    }

    setUserProperties(data: Json) {
        setUserProperties(this.analytics, data);
    }

    signIn() {
        signInAnonymously(this.auth).then((res) => {
            const { user } = res;
            const { uid } = user;
            this.uid = uid;

            this.setUserProperties({
                uid: this.uid,
            });
        });
    }
}

export let analytics: Firebase;

export const initFirebase = (firebaseConfig: FirebaseConfig) => {
    analytics = new Firebase(firebaseConfig);
    analytics.signIn();
};
