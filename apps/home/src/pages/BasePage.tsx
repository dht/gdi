import { Footer } from '@gdi/ui';
import TopBarContainer from '../components/TopBar/TopBar.container';
import { Container, Content, H1, Wrapper } from './BasePage.style';
import classnames from 'classnames';
import { useLinesBk } from '@gdi/ui';
import HistoryContainer from '../components/History/History.container';
import FooterContainer from '../containers/Footer.container';

export type BasePageProps = {
  children: React.ReactNode;
  header?: string;
  fullWidth?: boolean;
  narrowWidth?: boolean;
  renderSticky?: () => React.ReactNode;
};

export function BasePage(props: BasePageProps) {
  const { header, fullWidth, narrowWidth } = props;

  useLinesBk();

  function renderSticky() {
    if (!props.renderSticky) {
      return null;
    }

    return props.renderSticky();
  }

  const className = classnames({
    fullWidth,
    narrowWidth,
  });

  return (
    <Wrapper className='BasePage-wrapper' data-testid='BasePage-wrapper'>
      <TopBarContainer />
      {renderSticky()}
      <Content>
        <Container className={className}>
          {header && <H1>{header}</H1>}
          {props.children}
        </Container>
      </Content>
      <FooterContainer />
      {/* <HistoryContainer /> */}
    </Wrapper>
  );
}

export default BasePage;
