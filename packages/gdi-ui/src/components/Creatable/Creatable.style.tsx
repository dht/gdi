import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  color: #333;

  &.dark {
    --bg-secondary: #111115;
    --bg-primary: #fff;
    --border-color: #445;
    --text-primary: #eee;
    color: inherit;

    .creatable__control {
      background-color: var(--bg-secondary);
      border-color: var(--border-color);
      color: var(--text-primary);
      transition: none;

      input {
      }

      &:hover {
        border-color: var(--border-color);
      }
    }

    .creatable__menu {
      background-color: var(--bg-secondary);
      border: 1px solid var(--border-color);
    }
    .creatable__option--is-focused {
      color: #333;
    }

    .creatable__option {
      &:hover {
        background-color: var(--bg-primary);
        color: #333;
        font-weight: bold;
      }

      &.is-focused {
        background-color: var(--bg-secondary);
      }
    }

    .creatable__indicator-separator {
      background-color: var(--border-color);
    }

    .creatable__input-container {
      color: var(--text-primary);
    }

    .creatable__placeholder,
    .creatable__single-value {
      color: var(--text-primary);
    }
  }
`;

export const colorStyles: any = {
  control: (styles: any) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles: any, params: any) => {
    const { data, isDisabled, isFocused, isSelected } = params;
    return {
      ...styles,
    };
  },
  multiValue: (styles: any, params: any) => {
    const { data } = params;

    return {
      ...styles,
      backgroundColor: data.bkColor,
      color: data.color,
    };
  },
  multiValueLabel: (styles: any, params: any) => ({
    ...styles,
    backgroundColor: 'transparent',
    color: params.data.color,
  }),
  multiValueRemove: (styles: any, params: any) => ({
    ...styles,
    backgroundColor: 'transparent',
    color: params.data.color,
  }),
};
