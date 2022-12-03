import styled, { css } from 'styled-components';
import { mobile } from '../Base.style';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &.animated {
        .items {
            transition: all 0.6s ease-in-out;

            .item {
                transition: all 0.3s ease-in-out;
            }
        }
    }
`;

export const Items = styled.div`
    position: relative;
    width: 100%;
    border: 1px solid gold;
`;

export const Item = styled.a<{
    imageUrl: string;
    contain?: boolean;
    itemHeight: number;
}>`
    background-image: url(${(props) => props.imageUrl});
    height: ${(props) => props.itemHeight}px;
    background-size: ${(props) => (props.contain ? 'contain' : 'cover')};
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    background-color: white;

    .overlay {
    }

    &:hover {
        .overlay {
            background-color: #ffd9001b;
        }
    }
`;

export const SwitchWrapper = styled.div`
    width: 600px;
    margin: 30px auto;

    > div {
    }

    ${mobile(css`
        display: none;
    `)}
`;

export const Title = styled.div`
    position: absolute;
    bottom: 2px;
    right: 2px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    padding: 2px 5px;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
`;
