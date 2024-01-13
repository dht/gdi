import { DocumentData } from 'firebase/firestore';

export type Json = Record<string, any>;

export type Params = {
  config: Json;
  projectId: string;
  isEmulator: boolean;
  isLocalInstance: boolean;
  localInstanceUrl: string;
  toast: ToastMethod;
};

export type GdiLog = {
  id: string;
  message: string;
  source: string;
  timestamp: number;
  verb: string;
  data: Json;
};

export type Callback = (data?: DocumentData) => void;

export type ILoginState = {
  uid: string | null;
  user: DocumentData | null;
  createdAt: number | null;
  lastLoginAt: number | null;
  status: LoginStatus;
  provider: LoginProvider;
  error: Error | null;
  isAnonymous: boolean | null;
  email: string | null;
  emailVerified: boolean | null;
  displayName: string | null;
  displayPhoto: string | null;
  initials: string;
};

export type LoginStatus = 'idle' | 'anonymous' | 'authenticated' | 'error';
export type LoginProvider = 'none' | 'firebase' | 'google' | 'email-link';

export type ILoginProviderProps = {
  children: React.ReactNode;
};

export type ILoginContext = {
  state: ILoginState;
  callbacks: {};
  patchState: (change: Partial<ILoginState>) => void;
};

export const defaultLoginState: ILoginState = {
  uid: null,
  createdAt: null,
  lastLoginAt: null,
  user: null,
  status: 'idle',
  provider: 'none',
  error: null,
  isAnonymous: null,
  email: null,
  emailVerified: null,
  displayName: null,
  displayPhoto: null,
  initials: '',
};

export type DbScope = 'users' | 'keys' | 'logs';

export type ToastMethod = (messages: string[], toastType: string, promise?: Promise<any>) => any;
