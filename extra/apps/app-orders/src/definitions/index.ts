import { definitions as definitionsCoupons } from './coupons';
import { definitions as definitionsOrders } from './orders';

export const allDefinitions: Partial<ICrudDefinitionsPerItemType> = {
    coupon: definitionsCoupons,
    order: definitionsOrders,
};
