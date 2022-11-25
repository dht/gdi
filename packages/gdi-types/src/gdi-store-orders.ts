// AUTO-GENERATED

export const A7 = {};

declare global {
    export type IOrdersStore = {
        meta: IGdiMeta;
        appStateOrders: IOrdersState;
        currentIdsOrders: ICurrentIdsOrders;
        orders: IOrders;
        orderJournals: IOrderJournals;
        coupons: ICoupons;
    };

    export type IOrdersState = {
        stateKey: string;
    };

    export type ICurrentIdsOrders = {
        orderId: string;
    };

    export type OrderStatus =
        | 'incoming'
        | 'processed'
        | 'shipped'
        | 'cancelled';

    export type IOrder = {
        id: string;
        name: string;
        cartId?: string;
        startDate: string;
        endDate: string;
        userId: string;
        status: OrderStatus;
        items: IProductLine[];
        tags: string[];
        dataTags: string[];
        imageUrl?: string;
        imageThumbUrl?: string;
        ratio?: number;
    };

    export type IOrderJournal = {
        id: string;
        orderId: string;
        title: string;
        entryDate: string;
    };

    export type IOrders = Record<string, IOrder>;
    export type IOrderJournals = Record<string, IOrderJournal>;

    export type CouponStatus = 'active' | 'expired' | 'completed' | 'archived';
    export type CouponType =
        | 'discount'
        | 'freeShipping'
        | 'freeProduct'
        | 'freeGift';

    export type CouponDistribution = 'fixed' | 'generate';

    export type ICoupon = {
        id: string;
        name: string;
        notes?: string;
        startDate: string;
        endDate: string;
        distribution: CouponDistribution;
        amount: number;
        cap: number;
        status: CouponStatus;
        items: ICouponInstance[];
        tags: string[];
        dataTags: string[];
        imageUrl?: string;
        imageThumbUrl?: string;
        ratio?: number;
        couponType: CouponType;
        couponValue: {
            value: number;
            unit: 'percent' | 'amount';
        };
        productId: string;
    };

    export type ICouponInstance = {
        id: string;
        value: string;
        notes?: string;
        wasUsed?: boolean;
        usageDate?: string;
        orderId?: string;
        cartId?: string;
        userId?: string;
    };

    export type ICoupons = Record<string, ICoupon>;
}
