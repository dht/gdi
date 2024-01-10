import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { Actions, H2, P, Wrapper } from './EmptyPage.style';

export type EmptyPageProps = {
  iconName: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  onClick: () => void;
  children: React.ReactNode;
  debounce?: number;
};

export function EmptyPage(props: EmptyPageProps) {
  const { iconName, title, description, buttonText, buttonLink, debounce = 1200 } = props;
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, debounce);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <Wrapper className='EmptyPage-wrapper' data-testid='EmptyPage-wrapper'>
      <Icon className='icon' name={iconName} />
      <H2>{title}</H2>
      <P>{description}</P>
      <Actions>
        <Button color='primary' onClick={props.onClick}>
          {buttonText}
        </Button>
        {props.children}
      </Actions>
    </Wrapper>
  );
}

export default EmptyPage;
