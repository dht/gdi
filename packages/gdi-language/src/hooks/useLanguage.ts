import { D, emptyD, useDates } from './useDates';
import { emptyM, M, useCurrency } from './useCurrency';
import { emptyN, N, useNumbers } from './useNumbers';
import { emptyH, H, useTime } from './useTime';
import {
    emptyT,
    emptyTD,
    emptyTJ,
    emptyTN,
    T,
    TD,
    TJ,
    TN,
    useTranslation,
} from './useTranslation';

export function useLanguage() {
    const { m } = useCurrency();
    const { n } = useNumbers();
    const { d } = useDates();
    const { h } = useTime();
    const { t, td, tn, tj } = useTranslation();

    return { m, n, d, h, t, td, tn, tj } as L;
}

export type L = {
    m: M;
    n: N;
    d: D;
    h: H;
    t: T;
    td: TD;
    tn: TN;
    tj: TJ;
};

export const emptyL: L = {
    m: emptyM,
    n: emptyN,
    d: emptyD,
    h: emptyH,
    t: emptyT,
    td: emptyTD,
    tn: emptyTN,
    tj: emptyTJ,
};
