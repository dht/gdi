import { getString, setString } from 'shared-base';
import { auth } from './firebase';
import {
  AuthProvider,
  GoogleAuthProvider,
  signInAnonymously as _signInAnonymously,
  signInWithEmailLink as _signInWithEmailLink,
  signInWithPopup as _signInWithPopup,
  sendSignInLinkToEmail as _sendSignInLinkToEmail,
  onAuthStateChanged as _onAuthStateChanged,
  signOut as _signOut,
  linkWithPopup as _linkWithPopup,
  linkWithCredential as _linkWithCredential,
  isSignInWithEmailLink as _isSignInWithEmailLink,
  User,
} from 'firebase/auth';

// get current user
export const getCurrentUser = () => {
  return auth.currentUser;
};

export const signInAnonymously = () => {
  return _signInAnonymously(auth);
};

export const sendSignInLinkToEmail = (email: string) => {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: window.location.origin + '/email-link',
    // This must be true.
    handleCodeInApp: true,
  };

  return _sendSignInLinkToEmail(auth, email, actionCodeSettings).then(() => {
    setString('emailForSignIn', email);
  });
};

export const signInWithEmailLink = () => {
  const check = _isSignInWithEmailLink(auth, window.location.href);

  if (!check) {
    return Promise.reject('Not a valid email link');
  }

  let email = getString('emailForSignIn');

  if (!email) {
    email = window.prompt('Please provide your email for confirmation') ?? '';
  }

  return _signInWithEmailLink(auth, email, window.location.href).then((result) => {
    setString('emailForSignIn', '');
    return result;
  });
};

export const signInWithPopup = (provider: AuthProvider) => {
  try {
    return _signInWithPopup(auth, provider);
  } catch (err) {
    console.error(err);
  }
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(provider);
};

export const linkWithPopup = (provider: AuthProvider) => {
  const user = auth.currentUser;

  if (!user) {
    return Promise.reject('No user found');
  }

  return _linkWithPopup(user, provider);
};

export const linkWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return linkWithPopup(provider);
};

export const onAuthStateChanged = (callback: (user: any) => void) => {
  return _onAuthStateChanged(auth, callback);
};

export const signOut = () => {
  return _signOut(auth);
};

export const getAuth = () => {
  return auth;
};
