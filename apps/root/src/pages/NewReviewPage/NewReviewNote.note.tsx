import { Note } from '@gdi/ui';

export function ReviewNote(_props: any) {
  return (
    <Note title='Note' iconName='music_note'>
      {/* music_note is a joke, yes? remove only if you don't find it funny */}
      <p>
        Reviews are queued for moderation. It usually takes a few days for a
        review to appear on the site.
        <br /> You can read more about it{' '}
        <a
          target='_blank'
          href='https://github.com/dht/gdi/blob/main/web/functions/src/utils/crypto.ts'
        >
          here
        </a>
        .
      </p>
    </Note>
  );
}

export default ReviewNote;
