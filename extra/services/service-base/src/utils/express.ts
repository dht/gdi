import ExpressBuilder from '../builders/ExpressBuilder';
import { IExpressOptions, IEndpointsBuilder } from '../types';

export const initExpress = (
    endpointsBuilder: IEndpointsBuilder,
    options: IExpressOptions
) => {
    const expressBuilder = new ExpressBuilder()
        .withOptions(options)
        .withRouters(endpointsBuilder.build());

    return expressBuilder.build();
};
