import BkVideo from '../../components/BkVideo/BkVideo';
import Countdown from '../../components/Countdown/Countdown';
import { Content, Logo, Wrapper } from './LogoutPage.style';

export type LogoutPageProps = {
  onHome: () => void;
};

export function LogoutPage(props: LogoutPageProps) {
  return (
    <Wrapper className='LogoutPage-wrapper' data-testid='LogoutPage-wrapper'>
      <Logo src='/logo-white.svg' onClick={() => props.onHome()} />
      <Content>
        Thank you for using GDI. See you soon!
        <Countdown
          message="You'll be redirected to the home page"
          seconds={8}
          onTimeout={props.onHome}
        />
      </Content>
    </Wrapper>
  );
}

export default LogoutPage;
