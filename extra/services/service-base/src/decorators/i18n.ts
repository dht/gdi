import { Request, Response } from 'express';

export function i18n(defaultLanguageCode: string = 'en') {
    return function i18n(
        _target: Object,
        _propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        const originalFunc = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const req: Request = args[0];
            const res: Response = args[1];

            const languageCode = req.headers['language-code'];

            res.locals.languageCode =
                (languageCode as string) ?? defaultLanguageCode;

            return originalFunc.apply(this, args);
        };

        return descriptor;
    };
}
