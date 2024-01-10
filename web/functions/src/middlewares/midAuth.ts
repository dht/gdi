import { auth } from '../utils/firebase';

export const midAuthenticateByAuth = async (req: any, res: any, next: any) => {
  const context = req.auth; // req.auth contains the context object

  if (!context) {
    // The user is not authenticated
    res.status(401).json({ message: 'User is not authenticated.' });
    return;
  }

  // Access user information
  const uid = context.uid;
  const email = context.token.email; // Example: Get the user's email

  // save to locals
  req.user = { uid, email };
  req.context = context;

  next();
};

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
