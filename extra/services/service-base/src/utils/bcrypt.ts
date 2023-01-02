import bcrypt from 'bcrypt';

export const hashToken = async (token: string): Promise<string> => {
    if (!process.env.SALT) {
        throw new Error('Missing SALT');
    }

    const hashedToken = await bcrypt.hash(token, process.env.SALT ?? '');

    return hashedToken;
};
