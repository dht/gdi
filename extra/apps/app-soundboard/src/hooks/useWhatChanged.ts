import { useEffect, useRef } from 'react';

export const useWhatChanged = (depObject: Record<string, any>) => {
    const ref = useRef<any>();

    useEffect(() => {
        if (ref.current) {
            Object.keys(depObject).forEach((key) => {
                if (depObject[key] !== ref.current[key]) {
                    console.log(`${key} changed`);
                }
            });
        }

        ref.current = depObject;
    }, [depObject]);
};
