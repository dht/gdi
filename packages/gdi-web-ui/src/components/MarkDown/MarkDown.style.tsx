import styled from 'styled-components';

export const Wrapper = styled.div<{ height: number }>`
    overflow: auto;
    padding-right: 10px;

    &.dark {
        color: white;

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    }

    &.light {
        color: #333;

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.2);
        }
    }

    .mark-down {
        background-color: transparent;
        margin-bottom: 50px;
    }
`;
