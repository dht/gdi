import { prompt } from '@gdi/ui';
import { getString, setString } from 'shared-base';

const COUNTRY_CODE_KEY = 'countryCode';

export const fixPhone = (phone: string) => {
  return phone.replace(/[^0-9+]/g, '');
};

export function* verifyPhone(phone: string) {
  if (!phone) return;

  const fixedPhone = fixPhone(phone);

  if (fixedPhone.includes('+')) {
    return fixedPhone;
  }

  const countryCode = getString(COUNTRY_CODE_KEY);

  if (countryCode) {
    return `+${countryCode.replace('+', '')}${fixedPhone.replace(/^0+/, '')}`;
  }

  const { value, didCancel } = yield prompt.input({
    title: 'Set default country code',
    placeholder: '+1',
    ctaButtonText: 'Set',
    defaultValue: '',
  });

  if (didCancel || !value) {
    return;
  }

  setString(COUNTRY_CODE_KEY, value);

  return `+${value}${fixedPhone.replace(/^0+/, '')}`;
}
