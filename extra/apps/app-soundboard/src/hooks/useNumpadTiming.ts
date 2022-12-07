import { RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import { useBoolean } from 'react-use';
import { debounce } from 'shared-base';

type OnChangeCallback = (newValue: number) => void;

export const useNumpadTiming = (
    ref: RefObject<HTMLDivElement | undefined>,
    minutes: number,
    callback: OnChangeCallback,
    depArray: any[] = []
) => {
    const hover = useMouseHover(ref);
    const [lastMinutesValue, setLastMinutesValue] = useState(minutes);

    const debouncedCallback = useMemo(() => {
        return debounce(callback, 100);
    }, [callback]);

    const onNumpad = useCallback(
        (number: number) => {
            const newValue = minutesAndNumberToNewValue(
                lastMinutesValue,
                number
            );

            setLastMinutesValue(newValue);
            debouncedCallback(newValue);
        },
        [debouncedCallback, lastMinutesValue, ...depArray]
    );

    useNumpad(hover, onNumpad);
};

const useMouseHover = (ref: RefObject<HTMLDivElement | undefined>) => {
    const [hover, setHover] = useBoolean(false);

    useEffect(() => {
        const that: any = ref.current;

        function onMouseOver() {
            setHover(true);
        }

        function onMouseOut() {
            setHover(false);
        }

        that.addEventListener('mouseover', onMouseOver);
        that.addEventListener('mouseout', onMouseOut);

        return () => {
            that.removeEventListener('mouseover', onMouseOver);
            that.removeEventListener('mouseout', onMouseOut);
        };
    }, []);

    return hover;
};

type OnNumpadCallback = (number: number) => void;

const useNumpad = (on: boolean, callback: OnNumpadCallback) => {
    useEffect(() => {
        function onKeyDown(ev: KeyboardEvent) {
            callback(parseInt(ev.key));
        }

        if (!on) {
            document.removeEventListener('keydown', onKeyDown);
            return;
        }

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [on, callback]);
};

function minutesAndNumberToNewValue(totalMinutes: number, number: number) {
    let output = 0;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours === number) {
        output = hours * 60 + nextMinutes(minutes);
    } else {
        output = number * 60;
    }

    return output;
}

function nextMinutes(currentMinutes: number) {
    if (currentMinutes < 20) {
        return 20;
    } else if (currentMinutes < 40) {
        return 40;
    } else {
        return 0;
    }
}
