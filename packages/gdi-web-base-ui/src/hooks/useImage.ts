import { useEffect, useRef, useState } from 'react';
import { useSetState } from 'react-use';

export function useImage(imageUrl: string) {
    const [isLoading, setIsLoading] = useState(false);
    const [dimensions, setDimensions] = useSetState({
        width: 600,
        height: 500,
    });
    const ref = useRef<number>();

    useEffect(() => {
        clearTimeout(ref.current);

        ref.current = setTimeout(() => {
            setIsLoading(true);
        }, 600);

        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
            setDimensions({
                width: image.width,
                height: image.height,
            });
            setIsLoading(false);
        };

        return () => {
            clearTimeout(ref.current);
        };
    }, [imageUrl]);

    useEffect(() => {
        return () => {
            clearTimeout(ref.current);
        };
    });

    return [isLoading, dimensions] as [boolean, typeof dimensions];
}
