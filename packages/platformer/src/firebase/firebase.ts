import { FirebaseApp, initializeApp } from 'firebase/app';
// import {
//     Analytics,
//     getAnalytics,
//     logEvent,
//     setUserId,
//     setUserProperties,
// } from 'firebase/analytics';
import {
    FirebaseStorage,
    getStorage,
    uploadBytes,
    ref,
} from 'firebase/storage';
import { Firestore, getFirestore } from 'firebase/firestore/lite';
import {
    Auth,
    getAuth,
    signInAnonymously,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import { GoogleUser } from '../types';

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
    private app: FirebaseApp;
    // private analytics: Analytics;
    private db: Firestore;
    private auth: Auth;
    private ui: firebaseui.auth.AuthUI;
    private authListeners: AuthListener[] = [];
    private storage: FirebaseStorage;

    public uid: string;
    public clientId: string;

    constructor(firebaseConfig: FirebaseConfig) {
        this.app = initializeApp(firebaseConfig);
        // this.analytics = getAnalytics(this.app);
        this.db = getFirestore(this.app);
        this.auth = getAuth(this.app);
        this.ui = new firebaseui.auth.AuthUI(this.auth);
        this.uid = '';
        this.storage = getStorage();
        this.clientId = firebaseConfig.appId;

        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                this.uid = user.uid;
                this.authListeners.forEach((listener) => {
                    listener(user);
                });
            } else {
                this.authListeners.forEach((listener) => {
                    listener(null);
                });
            }
        });
    }

    addAuthListener(listener: AuthListener) {
        this.authListeners.push(listener);
    }

    removeAuthListener(listener: AuthListener) {
        const index = this.authListeners.indexOf(listener);
        this.authListeners.splice(index, 1);
    }

    log(eventName: EventId, data?: Json) {
        // logEvent(this.analytics, eventName as string, data);
    }

    setUserId(userId: string) {
        // setUserId(this.analytics, userId);
    }

    setUserProperties(data: Json) {
        // setUserProperties(this.analytics, data);
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

    signOut() {
        return signOut(this.auth);
    }

    initUI(selector: string) {
        const uiConfig: firebaseui.auth.Config = {
            siteName: 'gDI',
            signInFlow: 'popup',
            signInSuccessUrl: '/admin/mixer',
            signInOptions: [
                {
                    provider: GoogleAuthProvider.PROVIDER_ID,
                    clientId: this.clientId,
                },
            ],
            tosUrl: '/termsOfService',
            privacyPolicyUrl: function () {
                window.location.assign('/privacy');
            },
        };

        this.ui.start(selector, uiConfig);
    }

    uploadImage(path: string, file: File) {
        const storageRef = ref(this.storage, path);
        return uploadBytes(storageRef, file).then((snapshot) => {
            const metadata = snapshot.metadata;

            const { bucket, fullPath, contentType, name } = metadata;

            const fullPathEncoded = encodeURIComponent(fullPath);

            const url = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${fullPathEncoded}?alt=media`;

            const data = {
                bucket,
                fullPath,
                contentType,
                name,
                url,
            };

            return {
                success: true,
                errorMessage: '',
                data,
            };
        });
    }

    get value() {
        return {
            app: this.app,
        };
    }
}

export let firebase: Firebase;

export const initFirebase = (firebaseConfig: FirebaseConfig) => {
    firebase = new Firebase(firebaseConfig);
    return firebase;
};

type AuthListener = (user: GoogleUser | null) => void;
