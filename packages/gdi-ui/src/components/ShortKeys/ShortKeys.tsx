import { Body, Modifier, TD, TR, Wrapper } from './ShortKeys.style';

export type ShortKeysProps = {
  shortKeys: IShortKey[];
  isMac?: boolean;
};

export function ShortKeys(props: ShortKeysProps) {
  const { shortKeys, isMac } = props;

  function renderShortKey(key: IShortKey) {
    return (
      <TR key={key.id} className='key'>
        <TD>{renderCombination(key)}</TD>
        <TD>{key.description}</TD>
      </TR>
    );
  }

  function renderShortKeys() {
    return shortKeys.map((key: IShortKey) => renderShortKey(key));
  }

  function renderCombination(shortKey: IShortKey) {
    const { key, withAlt, withCommand, withCtrl, withShift } = shortKey;

    let combo = [];

    if (withCtrl) {
      combo.push('Ctrl');
    }

    if (withShift && key !== '?') {
      combo.push(<Modifier>⇧</Modifier>);
    }

    if (withCommand) {
      combo.push(isMac ? <Modifier>⌘</Modifier> : 'Ctrl');
    }

    if (withAlt) {
      combo.push(isMac ? <Modifier>⌥</Modifier> : 'Alt');
    }

    combo.push(key);

    return combo;
  }

  return (
    <Wrapper className='ShortKeys-wrapper' data-testid='ShortKeys-wrapper'>
      <Body>{renderShortKeys()}</Body>
    </Wrapper>
  );
}

export default ShortKeys;
