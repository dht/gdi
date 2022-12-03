import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    font-size: 15px;
    color: #778;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #333;
    }

    ::-webkit-scrollbar-thumb {
        background: #666;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #888;
    }

    h1 {
        font-size: 17px;
    }

    h2 {
        font-size: 16px;
    }

    h3 {
        font-size: 15px;
    }

    h4 {
        font-size: 15px;
    }
`;
