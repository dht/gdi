import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 14px;

  .MuiInputBase-root {
    background-color: white;
    border-radius: 8px;
  }

  &.dark {
    .react-select-container {
      background-color: #333; /* Background color for the select container */
      color: #fff; /* Text color */
    }

    .react-select__control {
      background-color: #333; /* Background color for the select control */
      border: 1px solid #555; /* Border color */
    }

    .react-select__single-value {
      color: #fff; /* Selected option text color */
    }

    .react-select__indicator-separator {
      background-color: #555; /* Indicator separator color */
    }

    /* Styles for dropdown options */
    .react-select__option {
      color: #fff; /* Option text color */
      background-color: #333; /* Option background color */
    }

    /* Styles for the selected option */
    .react-select__option--is-selected {
      background-color: #444; /* Selected option background color */
    }

    /* Styles for hovered option */
    .react-select__option--is-focused {
      background-color: #555; /* Hovered option background color */
    }
  }
`;

export const GroupHeader = styled.div`
  position: sticky;
  top: -8px;
  padding: 8px 10px;
  font-weight: 600;
  font-size: 12;
  color: #1d1e22;
  background: white;
`;

export const GroupItems = styled('ul')`
  padding: 0;
  font-size: 14;
  color: #1d1e22;
`;

export const Select = styled.div``;
