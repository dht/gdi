import { useEffect, useState } from 'react';
import { isEmpty } from 'shared-base';

export type Callback = () => void;

export function useFirstLoad(callback: Callback, object: Json) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isLoaded || isEmpty(object)) {
            return;
        }

        setIsLoaded(true);
        callback();
    }, [object]);
}
