import { auth } from '../utils/firebase';

export const midAuthenticateByHeaders = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers['authorization'].split('Bearer ')[1];

    const verification = await auth.verifyIdToken(token);

    req.user = {
      uid: verification.uid,
      email: verification.email,
      displayName: verification.name,
      photoURL: verification.picture,
    };
  } catch (err: any) {
    console.log('err =>', err);
  }

  next();
};
