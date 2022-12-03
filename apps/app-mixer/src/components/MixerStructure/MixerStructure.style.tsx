import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 50px auto;
    width: 800px;
`;

export const ContainerItem = styled.div`
    background-color: #334;
    margin: 0 0 13px;
    height: 62px;
    border: 1px solid #556;
    line-height: 50px;
    ${(props) => props.theme.padding('10px 15px 10px 20px')}

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ContainerNewItem = styled(ContainerItem)`
    background-color: #445;
`;

export const Title = styled.div`
    color: #eee;
    font-size: 23px;
    flex: 1;
`;

export const StatusRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Status = styled.div<{ full?: boolean }>`
    border: 1px solid transparent;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin: 3px;
    line-height: 20px;
    text-align: center;
    font-weight: ${(props) => (props.full ? 'bold' : 'normal')};
`;

export const StatusContent = styled(Status)`
    border-color: goldenrod;
    background-color: ${(props) => (props.full ? 'goldenrod' : 'transparent')};
    color: ${(props) => (props.full ? 'brown' : 'goldenrod')};

    &.on {
        border-color: goldenrod;
        background-color: goldenrod;
        color: #333;
        font-weight: bold;
    }
`;

export const WidgetThumb = styled.div<{ url?: string; ratio?: number }>`
    width: 50px;
    height: 40px;
    ${(props) => props.theme.marginLeft('10px')}
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
    background-image: url(${(props) => props.url});
    background-size: contain;
    position: relative;

    &:hover {
        &::before {
            display: block;
        }
    }

    &::before {
        content: '';
        position: absolute;
        ${(props) => props.theme.left('-450px')}
        width: 400px;
        top: -0px;
        height: ${(props) => (props.ratio ? 400 / props.ratio : 300)}px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
        background-image: url(${(props) => props.url});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        background-color: #334;
        z-index: 999;
        overflow: hidden;
        display: none;
    }
`;
