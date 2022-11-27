import React from 'react';
import styled from 'styled-components';
import { ContentContainer } from '../ContentContainer';
import { Empty } from '@gdi/web-ui';
import { selectors } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

export const PanelContentContainer = (props: any) => {
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const element = useSelector(selectors.base.$instanceSelected);
    const formConfig = useSelector(selectors.forms.$contentFormConfigSelected);
    const formData = useSelector(selectors.forms.$contentFormDataSelected);
    const formOptions = useSelector(
        selectors.forms.$contentFormOptionsSelected
    );

    if (!currentIds.selectedInstanceId) {
        return (
            <Empty
                message='Select a block'
                iconName='AppIconDefault'
                withIcon
            />
        );
    }

    return (
        <Wrapper>
            <ContentContainer
                element={element}
                formConfig={formConfig}
                formData={formData}
                formOptions={formOptions}
            />
        </Wrapper>
    );
};

export const Wrapper = styled.div`
    display: flex;
    flex: 1;

    .Layouts-container {
        flex-direction: column;
        width: 95%;

        > div {
            width: 100%;
        }
    }
`;

export default PanelContentContainer;
