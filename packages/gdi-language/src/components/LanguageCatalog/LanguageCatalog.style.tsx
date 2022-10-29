import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    margin: 200px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const Table = styled.table`
    flex: 0;

    thead {
        tr {
            background-color: rgba(235, 235, 255, 0.1);
        }

        th {
            padding: 10px;
            text-align: left;
        }
    }

    tbody {
        tr {
            &:nth-child(2n) {
                background-color: rgba(255, 255, 255, 0.05);
            }
        }

        td {
            padding: 10px;

            &.key {
                color: gold;
            }

            &.error {
                color: red;
            }
        }
    }
`;
