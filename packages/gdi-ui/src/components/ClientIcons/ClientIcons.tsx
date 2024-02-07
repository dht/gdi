import React from 'react';
import { Client, Wrapper } from './ClientIcons.style';
import { clients } from './ClientIcons.data';

export type ClientIconsProps = {};

export function ClientIcons(_props: ClientIconsProps) {
  function onClick(url: string) {
    window.open(url, '_blank');
  }

  function renderIcon(icon: Json) {
    const { title, iconUrl, url } = icon;

    const style: React.CSSProperties = {
      backgroundImage: `url(${iconUrl})`,
    };

    return (
      <Client
        onClick={() => onClick(url)}
        key={icon.id}
        style={style}
        title={title}
        className='icon'
      />
    );
  }

  function renderIcons() {
    return clients.map((icon: Json) => renderIcon(icon));
  }

  return (
    <Wrapper className='ClientIcons-wrapper' data-testid='ClientIcons-wrapper'>
      {renderIcons()}
    </Wrapper>
  );
}

export default ClientIcons;
