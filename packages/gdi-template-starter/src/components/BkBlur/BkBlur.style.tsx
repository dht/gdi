import styled from 'styled-components';

export const Wrapper = styled.div<{
    imageUrl?: string;
}>`
    position: relative;
    flex: 1;
    background-color: #112;

    &::before {
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${(props) => props.imageUrl});
        background-size: cover;
        background-position: bottom center;
        background-attachment: fixed;
        position: absolute;
        filter: brightness(0.3) opacity(25%) blur(1px) contrast(110%);
    }
`;
