import { useEffect, useMemo, useRef, useState } from 'react';
import { initSite } from '../bootstrap/initSite';

export function useStore() {
    const [site, setSite] = useState<any>();

    useEffect(() => {
        const instance = initSite();

        if (instance) {
            setSite(instance);
        }
    }, []);

    return site;
}
