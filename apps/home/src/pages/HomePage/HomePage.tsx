import { IBoard } from '@gdi/store-base';
import { Gallery, Loader } from '@gdi/ui';
import FilterContainer from '../../containers/FilterContainer';
import BasePage from '../BasePage';
import HomePageEmpty from './HomePage.empty';
import { Center, Container, Content } from './HomePage.style';
import GalleryContainer from '../../containers/GalleryContainer';

export type HomePageProps = {
  boards: IBoard[];
  isLoading: boolean;
  isGuest: boolean | null;
  callbacks: {
    onBrowse: () => void;
    onQuickStart: () => void;
    onClick: (board: IBoard) => void;
  };
};

export function HomePage(props: HomePageProps) {
  const { boards, isGuest, isLoading, callbacks } = props;

  const isEmpty = boards.length === 0;

  function renderInner() {
    if (isGuest === null || isLoading) {
      return (
        <Center>
          <Loader></Loader>
        </Center>
      );
    }

    if (isEmpty) {
      return <HomePageEmpty callbacks={callbacks} />;
    }

    return <GalleryContainer boards={boards} onClick={callbacks.onClick} />;
  }

  function renderSticky() {
    return <FilterContainer />;
  }

  return (
    <BasePage renderSticky={renderSticky} fullWidth>
      <Content>
        <Container>{renderInner()}</Container>
      </Content>
    </BasePage>
  );
}

export default HomePage;
