import React from 'react';
import {
    WrapperDesktop,
    WrapperMobile,
    DesktopContent,
    DesktopHeader,
    DesktopKeyboard,
    DesktopKeyboardLid,
    DesktopSpeaker,
    MobileContent,
    MobileHeader,
    MobilePower,
    MobileSpeaker,
} from './Device.style';

export type DeviceProps = {
    children: JSX.Element | JSX.Element[];
    isMobile?: boolean;
};

export function Device(props: DeviceProps) {
    const { isMobile } = props;

    const Cmp = isMobile ? DeviceMobile : DeviceDesktop;

    return <Cmp>{props.children}</Cmp>;
}

export function DeviceMobile(props: DeviceProps) {
    return (
        <WrapperMobile>
            <MobileHeader>
                <MobileSpeaker />
                <MobilePower />
            </MobileHeader>
            <MobileContent>{props.children}</MobileContent>
        </WrapperMobile>
    );
}

export function DeviceDesktop(props: DeviceProps) {
    return (
        <WrapperDesktop>
            <DesktopHeader>
                <DesktopSpeaker />
            </DesktopHeader>
            <DesktopContent>{props.children}</DesktopContent>
            <DesktopKeyboard>
                <DesktopKeyboardLid />
            </DesktopKeyboard>
        </WrapperDesktop>
    );
}

export default Device;
