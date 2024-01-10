import { Image, Wrapper } from './Github.style';

export type GithubProps = {
  url?: string;
};

export function Github(props: GithubProps) {
  const { url } = props;

  if (!url) {
    return null;
  }

  return (
    <Wrapper className='Github-wrapper' data-testid='Github-wrapper' href={url} target='_blank'>
      <Image src='/github-mark.svg' alt='github' draggable={false} />
    </Wrapper>
  );
}

export default Github;
