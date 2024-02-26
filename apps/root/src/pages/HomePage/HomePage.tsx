import { IBoard } from '@gdi/store-base';
import { Loader } from '@gdi/ui';
import CardBrowseContainer from '../../containers/CardBrowse.container';
import FilterContainer from '../../containers/Filter.container';
import GalleryContainer from '../../containers/Gallery.container';
import HomePageEmpty from './HomePage.empty';
import { Center, Container, Content, Wrapper } from './HomePage.style';

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

    return (
      <GalleryContainer
        boards={boards}
        extraCard={CardBrowseContainer}
        onClick={callbacks.onClick}
      />
    );
  }

  function renderSticky() {
    return <FilterContainer />;
  }

  return (
    <Wrapper>
      <Content>
        <Container>{renderInner()}</Container>
      </Content>
    </Wrapper>
  );
}

export default HomePage;
