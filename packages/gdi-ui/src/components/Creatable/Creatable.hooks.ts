import { useMemo } from 'react';
import { colors } from './Creatable.colors';

export function useOptions(options: Json[]) {
  const optionsMapped = useMemo(() => {
    return options.map((option) => {
      const colorStyle = colors[option.color] || colors.neutral;

      return {
        value: option.id,
        label: option.text,
        ...colorStyle,
      };
    });
  }, [options]);

  return optionsMapped;
}

export function useValues(values: string[], options: Json[] = []) {
  const valuesMapped = useMemo(() => {
    return values.map((value) => {
      const valueToCheck = Array.isArray(value) ? value[0] : value;
      const option = options.find((o) => o.id === valueToCheck);
      const { color = 'gold' } = option || {};

      const colorStyle = colors[color] || colors.neutral;

      return {
        value: valueToCheck,
        label: valueToCheck,
        ...colorStyle,
      };
    });
  }, [values]);

  return valuesMapped;
}
