import React from 'react';
import { Container, Item, Items, Thumb } from './IsoBrowser.style';
import { IAssets, IBuilding, IBuildings } from 'isokit';

export type IsoBrowserProps = {
    assets: IAssets;
    buildings: IBuildings;
    onSelect: (instance: IBuilding) => void;
};

export function IsoBrowser(props: IsoBrowserProps) {
    const { buildings, assets } = props;

    function renderBuilding(building: IBuilding) {
        const { assetId } = building;

        const asset = assets[assetId];
        const { thumbUrl } = asset ?? {};

        return (
            <Item key={building.id} onClick={() => props.onSelect(building)}>
                <Thumb src={thumbUrl} />
            </Item>
        );
    }

    function renderBuildings() {
        return Object.values(buildings).map((building: IBuilding) =>
            renderBuilding(building)
        );
    }

    return (
        <Container
            className='IsoBrowser-container'
            data-testid='IsoBrowser-container'
        >
            <Items>{renderBuildings()}</Items>
        </Container>
    );
}

export default IsoBrowser;
