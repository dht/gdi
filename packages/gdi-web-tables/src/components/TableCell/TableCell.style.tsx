import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 5px 10px;
`;

export const Image = styled.div`
    width: 70px;
    height: 80px;
    background-size: cover;
    background-position: center center;
`;

export const Name = styled.div``;

export const Number = styled.div``;

export const Text = styled.div<{ opacity?: number }>`
    opacity: ${(props) => props.opacity ?? 1};
    line-height: 24px;
`;

export const SubText = styled.div`
    line-height: 24px;
    font-size: 16px;
    color: #778;
`;

export const Social = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;

export const Tag = styled.div`
    background-color: #445;
    color: #ccd;
    padding: 3px 5px;
    border-radius: 5px;
    margin: 0 5px;
`;

export const Description = styled.div<{ opacity?: number }>`
    max-width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: ${(props) => props.opacity ?? 1};
    line-height: 24px;
`;

export const Id = styled.div`
    line-height: 24px;
    color: gold;
    max-width: 100px;
    opacity: 0.5;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const IconWrapper = styled.div`
    font-size: 24px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Time = styled.div`
    font-size: 20px;
    font-variation-settings: 'wdth' 100, 'wght' 200;
    color: pink;

    span {
        font-size: 12px;
    }
`;

export const Notification = styled.div`
    flex: 1;
`;

export const NotificationTitle = styled.div`
    font-size: 20px;
    font-variation-settings: 'wdth' 100, 'wght' 400;
    width: 350px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 4px;
`;

export const NotificationDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NotificationDescription = styled.div`
    color: #889;
    margin-right: 5px;
`;

export const Brand = styled.img<{ invertColors?: boolean }>`
    height: 22px;
    filter: ${(props) => (props.invertColors ? 'invert(1)' : 'none')};
`;
