import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 6px;

  .action-hide {
    display: none;
  }

  &.border {
    margin: 24px;
    border-radius: 12px;
    padding-left: 0;
    & .top {
      height: 50px;
    }

    & .content,
    & .top {
      padding: 8px 8px 8px 24px;
    }
  }

  &.show-hide {
    .action-copy {
      display: none;
    }

    .action-hide {
      display: flex;
    }
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #1d1e22;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    stroke-width: 1.5px;
    margin-right: 4px;
    width: 20px;
    height: 20px;
  }
`;

export const Count = styled.div`
  font-size: 12px;
  color: #949494;
  margin-left: 10px;
`;

export const Gap = styled.div`
  flex: 1;
`;

export const Actions = styled.div`
  svg {
    stroke-width: 1.5px;
    color: #333;
    width: 20px;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const TextArea = styled.textarea`
  fieldset {
    border: none;
  }

  textarea {
    font-size: 14px;
    line-height: 1.4;
    padding: 0;
    outline: none;
  }

  &.medium {
    textarea {
      font-size: 20px;
      line-height: 1.4;
    }
  }

  &.large {
    textarea {
      font-size: 22px;
      line-height: 1.4;
    }
  }
`;

export const Copy = styled.div``;
