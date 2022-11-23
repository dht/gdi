import React from 'react';
import {
    ContainerDesktop,
    ContainerMobile,
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
        <ContainerMobile>
            <MobileHeader>
                <MobileSpeaker />
                <MobilePower />
            </MobileHeader>
            <MobileContent>{props.children}</MobileContent>
        </ContainerMobile>
    );
}

export function DeviceDesktop(props: DeviceProps) {
    return (
        <ContainerDesktop>
            <DesktopHeader>
                <DesktopSpeaker />
            </DesktopHeader>
            <DesktopContent>{props.children}</DesktopContent>
            <DesktopKeyboard>
                <DesktopKeyboardLid />
            </DesktopKeyboard>
        </ContainerDesktop>
    );
}

export default Device;
