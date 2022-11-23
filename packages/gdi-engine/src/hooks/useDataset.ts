import { useContext, useMemo } from 'react';
import { SiteContext } from '../context/Site.context';

export function useDataset(id: string) {
    const { datasets } = useContext(SiteContext);

    const data = useMemo(() => {
        return Object.values(datasets[id] || {}) as Json[];
    }, [datasets, id]);

    return data;
}
