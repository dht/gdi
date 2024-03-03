import { Note } from '@gdi/ui';

export function AccountNote(props: any) {
  return (
    <Note iconName='lock' title='Security Note'>
      <p>
        Keys are stored encrypted with <strong>aes-256-ctr</strong> algorithm
        and are encoded and decoded on the server. <br />
        See code{' '}
        <a
          target='_blank'
          href='https://github.com/dht/gdi/blob/main/web/functions/src/utils/crypto.ts'
        >
          here
        </a>
        .
      </p>
      {props.children}
    </Note>
  );
}

export default AccountNote;
