import { IBoard } from '@gdi/store-base';
import { Button, EmptyPage } from '@gdi/ui';

export type HomePageProps = {
  callbacks: {
    onBrowse: () => void;
    onQuickStart: () => void;
    onClick: (board: IBoard) => void;
  };
};

export function HomePageEmpty(props: HomePageProps) {
  const { callbacks } = props;

  return (
    <EmptyPage
      iconName='crossword'
      title='You have no boards'
      description='Get started by browsing the Board Gallery'
      buttonText='Browse Boards'
      onClick={callbacks.onBrowse}
      buttonLink=''
    >
      <Button color='secondary' onClick={callbacks.onQuickStart}>
        Install Editor's Choice
      </Button>
    </EmptyPage>
  );
}

export default HomePageEmpty;
