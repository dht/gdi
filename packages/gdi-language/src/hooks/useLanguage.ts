import { D, emptyD, useDates } from './useDates';
import { emptyM, M, useCurrency } from './useCurrency';
import { emptyN, N, useNumbers } from './useNumbers';
import { emptyH, H, useTime } from './useTime';
import { emptyT, T, useTranslation } from './useTranslation';

export function useLanguage() {
    const { m } = useCurrency();
    const { n } = useNumbers();
    const { d } = useDates();
    const { h } = useTime();
    const { t } = useTranslation();

    return { m, n, d, h, t } as L;
}

export type L = {
    m: M;
    n: N;
    d: D;
    h: H;
    t: T;
};

export const emptyL: L = {
    m: emptyM,
    n: emptyN,
    d: emptyD,
    h: emptyH,
    t: emptyT,
};
