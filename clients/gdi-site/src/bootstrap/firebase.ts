import { FirebaseApp, initializeApp } from 'firebase/app';
import {
    Analytics,
    logEvent,
    setUserId,
    setUserProperties,
    initializeAnalytics,
} from 'firebase/analytics';
import {
    FirebaseStorage,
    getStorage,
    uploadBytes,
    ref,
} from 'firebase/storage';
import {
    Auth,
    getAuth,
    signInAnonymously,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    EmailAuthProvider,
} from 'firebase/auth';
import * as firebaseui from 'firebaseui';

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

export class Firebase {
    private app: FirebaseApp;
    private analytics: Analytics;
    private auth: Auth;
    private ui: firebaseui.auth.AuthUI;
    private authListeners: AuthListener[] = [];
    private storage: FirebaseStorage;

    public uid: string;
    public clientId: string;

    constructor(firebaseConfig: FirebaseConfig) {
        this.app = initializeApp(firebaseConfig);
        this.analytics = initializeAnalytics(this.app, {
            config: {
                send_page_view: false,
            },
        });
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

    log(eventName: GaId, data?: Json) {
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

    signOut() {
        return signOut(this.auth);
    }

    initUI(selector: string) {
        const uiConfig: firebaseui.auth.Config = {
            siteName: 'gDI',
            signInFlow: 'popup',
            signInSuccessUrl: '/admin/pages',
            signInOptions: [
                {
                    provider: GoogleAuthProvider.PROVIDER_ID,
                    clientId: this.clientId,
                },
                {
                    provider: EmailAuthProvider.PROVIDER_ID,
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

type AuthListener = (user: Json | null) => void;
