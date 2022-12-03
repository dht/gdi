import React from 'react';
import {
    Bk,
    Bks,
    Content,
    WrapperSimple,
    WrapperLayered,
} from './Wrapper.style';
import classnames from 'classnames';

export type WrapperProps = {
    children: JSX.Element | JSX.Element[];
    bk?: JSX.Element | JSX.Element[];
    className?: string;
    onClick?: () => void;
};

export function Wrapper(props: WrapperProps) {
    const { bk } = props;

    if (bk) {
        return <LayeredWrapper {...props} />;
    }

    const className = classnames('Wrapper-wrapper', props.className);

    return (
        <WrapperSimple
            className={className}
            data-testid='Wrapper-wrapper'
            onClick={props.onClick}
        >
            {props.children}
        </WrapperSimple>
    );
}

export function LayeredWrapper(props: WrapperProps) {
    const { bk } = props;

    function renderBk(bk: JSX.Element, index: number) {
        return (
            <Bk key={index} className='bk'>
                {bk}
            </Bk>
        );
    }

    function renderBks() {
        if (!bk) {
            return null;
        }

        const bks = Array.isArray(bk) ? bk : [bk];
        return bks.map((item, index) => renderBk(item, index));
    }

    const className = classnames('Wrapper-wrapper', props.className);

    return (
        <WrapperLayered
            className={className}
            data-testid='Wrapper-wrapper'
            onClick={props.onClick}
        >
            <Bks>{renderBks()}</Bks>
            <Content className='content'>{props.children}</Content>
        </WrapperLayered>
    );
}

export default Wrapper;
