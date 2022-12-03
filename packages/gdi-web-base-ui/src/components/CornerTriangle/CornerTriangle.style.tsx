import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 40px;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0 8px 0 0;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3),
        inset 0 0 5px 3px rgba(0, 0, 0, 0.2);
    border-top: 2px solid #33334477;
    border-right: 2px solid #33334477;

    i {
        position: relative;
    }

    &.white {
        background-image: linear-gradient(
            45deg,
            #790d0ded 0%,
            #942632 20%,
            #df78a0 90%,
            #ef748067 100%
        );
    }

    &.cyan {
        background-image: linear-gradient(
            45deg,
            #ffffff66 0%,
            #ffffffcc 20%,
            #ffffffff 90%,
            #ffffffcc 100%
        );

        color: #334;
    }
`;
