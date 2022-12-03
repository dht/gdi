import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    color: #eee;
    padding: 30px;

    > div {
        flex: 1;
        --fc-small-font-size: 0.85em;
        --fc-page-bg-color: #eee;
        --fc-neutral-bg-color: rgba(208, 208, 208, 0.3);
        --fc-neutral-text-color: #778;
        --fc-border-color: rgba(255, 255, 255, 0.1);

        --fc-button-text-color: #fff;
        --fc-button-bg-color: #334;
        --fc-button-border-color: #334;
        --fc-button-hover-bg-color: #445;
        --fc-button-hover-border-color: #445;
        --fc-button-active-bg-color: #778;
        --fc-button-active-border-color: #778;

        --fc-event-bg-color: #3788d8;
        --fc-event-border-color: #3788d8;
        --fc-event-text-color: #fff;
        --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);

        --fc-more-link-bg-color: #d0d0d0;
        --fc-more-link-text-color: inherit;

        --fc-event-resizer-thickness: 8px;
        --fc-event-resizer-dot-total-width: 8px;
        --fc-event-resizer-dot-border-width: 1px;

        --fc-non-business-color: rgba(215, 215, 215, 0.3);
        --fc-bg-event-color: rgb(143, 223, 130);
        --fc-bg-event-opacity: 0.3;
        --fc-highlight-color: #334;
        --fc-today-bg-color: #334;
        --fc-now-indicator-color: red;
    }
`;
