import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color: #232332;
    z-index: 3;
    box-shadow: inset 0 0 3px 3px rgba(0, 0, 0, 0.2);
    user-select: none;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.5);
    transition: all 80ms linear;
    background-image: url(//raw.githubusercontent.com/dht/gdi/main/clients/gdi-admin/public/Group.svg);

    @media (max-width: 768px) {
        display: none;
    }

    &.rtl {
        left: auto;
        right: 0;

        .overlay {
            position: fixed;
            left: 0;
            right: 55px;
            animation-name: fade-right-rtl;
        }

        .items {
            .item {
                .title {
                    margin-left: 0;
                    margin-right: 13px;
                }
            }
        }

        @keyframes fade-right-rtl {
            0% {
                opacity: 0;
                right: 0;
            }
            100% {
                right: 200px;
                opacity: 0.4;
            }
        }
    }

    &:hover {
        .items {
            opacity: 1;
        }
    }

    a {
        color: #d3d3d3;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    &::before {
        display: block;
        content: ' ';
        position: absolute;
        left: 0px;
        right: 0px;
        height: 2px;
        top: 0px;
        background-image: linear-gradient(
            to left,
            #232332 0%,
            rgba(255, 217, 0, 0.6) 100%
        );
    }

    &.slim {
        width: 55px;
        transition: all 50ms linear;
        box-shadow: none;

        .header {
            .cancel {
                display: none;
            }
        }

        .items {
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);

            .item {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 5px 15px;
                text-decoration: none;
                cursor: pointer;

                &:hover {
                    background-color: rgba(255, 255, 255, 0.07);
                }

                .icon {
                    font-size: 24px;
                }

                .title {
                    display: none;
                }
            }
        }
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 15px;
    text-decoration: none;
    cursor: pointer;
    position: relative;

    &:hover {
        background-color: rgba(255, 255, 255, 0.07);

        &::before {
            display: block;
            content: ' ';
            position: absolute;
            left: 0px;
            bottom: 0px;
            width: 2px;
            top: 0px;
            background-image: linear-gradient(
                to right,
                rgb(240, 90, 40) 0%,
                gold 100%
            );
        }
    }

    .icon {
        font-size: 20px;
    }

    .title {
        margin-left: 13px;
        font-size: 16px;
    }

    &.selected {
        background-color: rgba(255, 255, 255, 0.03);

        .icon {
            color: gold;
        }

        .title {
            color: gold;
        }
    }
`;

export const Title = styled.div``;

export const Items = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 10px 0;
    opacity: 0.5;
    transition: all 200ms ease-in-out;
`;

export const Group = styled.div`
    overflow: hidden;

    &.open {
        background-color: rgba(0, 0, 30, 0.1);

        > .title {
            .chevron {
                transform: rotate(180deg);
            }
        }
    }
`;

export const GroupTitle = styled.div`
    font-size: 15px;
    padding: 20px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 500;

    &:hover {
        background-color: rgba(255, 255, 255, 0.07);
        cursor: pointer;
    }

    .chevron {
        float: right;
        font-size: 12px;
        padding-top: 4px;
        opacity: 0;
        transition: transform 180ms linear, opacity 50ms linear;
    }

    &:hover {
        .chevron {
            opacity: 0.7;
        }
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px;

    .cancel {
        cursor: pointer;
        color: rgba(255, 255, 255, 0.2);
        margin-bottom: 8px;
        position: absolute;
        right: -24px;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 5px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-left: none;
        font-size: 12px;
        z-index: 9999;
        top: 50px;
        margin-top: -40px;
        border-radius: 0 2px 2px 0;

        &:hover {
            color: gold;
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 55px;
    background-color: #001;
    transition: all 180ms linear;
    animation-name: fade-right;
    animation-duration: 80ms;
    animation-fill-mode: forwards;

    @keyframes fade-right {
        0% {
            opacity: 0;
            left: 0;
        }
        100% {
            left: 200px;
            opacity: 0.4;
        }
    }
`;
