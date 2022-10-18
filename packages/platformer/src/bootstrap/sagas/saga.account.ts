import { takeEvery, call } from 'saga-ts';
import { prompt } from '@gdi/web-ui';
import { setString } from 'shared-base';
import { CURRENT_ACCOUNT_KEY } from '../components/Bootstrap/Bootstrap.code';

type ChangeAccountAction = {
    type: 'CHANGE_ACCOUNT';
    accountName: string;
    availableAccounts: string[];
};

export function* changeAccount(action: ChangeAccountAction): any {
    const { accountName, availableAccounts } = action;

    const options = availableAccounts.map((account) => ({
        key: account,
        text: account,
    }));

    const { value, didCancel } = yield* call(prompt.select, {
        title: 'Change account',
        description: 'Choose an account: ',
        placeholder: 'Click to see available accounts',
        defaultValue: accountName,
        options,
        submitButtonText: 'Set (⌥⏎)',
    });

    if (didCancel || !value) {
        return;
    }

    setString(CURRENT_ACCOUNT_KEY, value);
    document.location = '/';
    document.location.reload();
}

export function* root() {
    yield takeEvery('CHANGE_ACCOUNT', changeAccount);
}

export default root;
