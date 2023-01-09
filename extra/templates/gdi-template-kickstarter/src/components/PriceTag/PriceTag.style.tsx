import styled from 'styled-components';

export const Wrapper = styled.div<{ rotation?: number }>`
    flex: 1;
    transform: rotate(${(props) => props.rotation}deg);
`;

export const Image = styled.img`
    width: 170px;
`;

export const Top = styled.div`
    font-size: 30px;
    font-variation-settings: 'wdth' 100, 'wght' 580;
    text-decoration: line-through;
    text-align: right;
    padding: 0 20px 8px;
`;

export const Left = styled.div`
    font-size: 25px;
    margin-top: 5px;
    margin-right: 5px;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: flex-start;
`;

export const Bottom = styled.div`
    padding: 3px 20px;
    text-align: right;
    font-size: 22px;
    font-variation-settings: 'wdth' 120, 'wght' 280;
`;

export const Center = styled.div`
    font-size: 60px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    transform: perspective(1000px) rotate3d(-0.3, 1, 0, -20deg);
    font-variation-settings: 'wdth' 100, 'wght' 680;
    background-color: #334;
    padding: 5px 30px;
    box-shadow: 0 0 10px 30px rgba(0, 0, 0, 0.09);
    border-radius: 15px;
    background-image: url(/noise.png);

    color: white;
    border: 7px solid white;

    i {
        font-style: normal;
        font-size: 50px;
        font-variation-settings: 'wdth' 100, 'wght' 280;
    }

    span {
        padding-top: 10px;
        margin: 0 5px;
        font-size: 20px;
        border-bottom: 3px solid white;
    }
`;
