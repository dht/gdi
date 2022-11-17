import styled from 'styled-components';

export const ButtonBase = styled.a`
    border-radius: 1.55em;
    display: inline-block;
    font-size: 0.9em;
    font-weight: 900;
    height: 3.1em;
    letter-spacing: 1px;
    line-height: 3.1em;
    padding: 0em 1.55em;
    text-transform: uppercase;
    transition: background-color 0.1s;
    background-color: #f2c973;
    color: #20232a;
    font-size: 15px;
    position: relative;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        &:after {
            border-radius: 1.55em;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    &:active {
        position: relative;
        bottom: 1px;
        left: 1px;
        box-shadow: inset 1px 1px 3px 1px rgba(0, 0, 0, 0.05);
    }
`;
