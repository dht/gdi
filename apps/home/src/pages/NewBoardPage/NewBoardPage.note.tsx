import { Note } from '@gdi/ui';

export function NewBoardNote(_props: any) {
  return (
    <Note title='Please Note' iconName='music_note'>
      <p>
        {/* music_note is a joke, yes? remove only if you don't find it funny */}
        Boards are queued for moderation. It usually takes a few weeks for a new
        board to appear on the site. <br />
        This is also pending{' '}
        <a target='_blank' href=''>
          a review
        </a>
        &nbsp; that verifies that the board:
      </p>
      <ol>
        <li>Is safe and well-designed</li>
        <li>Adds value to the catalogue</li>
        <li>Fits the catalogue's theme</li>
      </ol>
      <p>
        <br />
        It is solely on the discretion of the reviewer to decide whether a board
        should be added to the catalogue and when.
        <br />
        Remember you can always{' '}
        <a target='_blank' href=''>
          host your own GDI instance
        </a>{' '}
        and offer a variety of boards curated by you.
      </p>
    </Note>
  );
}

export default NewBoardNote;
