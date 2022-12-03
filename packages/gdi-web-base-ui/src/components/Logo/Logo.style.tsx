import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    img.logo {
        opacity: 0.9;
        width: 120px;
        transition: all 120ms linear;
    }

    span.os {
        color: white;
        position: relative;
        bottom: 5px;
        ${(props) => props.theme.left('5px')}
        font-size: 13px;
        opacity: 0.5;
    }

    &.small {
        margin-top: 7px;
        ${(props) => props.theme.marginLeft('3px')}

        img.logo {
            width: 41px;
            filter: grayscale(1);

            &:hover {
                filter: none;
            }
        }

        span.os {
            display: none;
        }
    }

    &.clickable {
        cursor: pointer;

        &:hover {
            color: gold;

            span.os {
                color: gold;
                opacity: 1;
            }
        }
    }
`;
