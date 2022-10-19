import { LanguageIso } from '../types';
import { D, emptyD, useDates } from './useDates';
import { emptyM, M, useMoney } from './useMoney';
import { emptyN, N, useNumbers } from './useNumbers';
import { emptyH, H, useTime } from './useTime';
import { emptyT, T, useTranslation } from './useTranslation';

export function useLanguage(forceLanguageId?: LanguageIso) {
    const { m } = useMoney(forceLanguageId);
    const { n } = useNumbers(forceLanguageId);
    const { d } = useDates(forceLanguageId);
    const { h } = useTime(forceLanguageId);
    const { t } = useTranslation(forceLanguageId);

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
