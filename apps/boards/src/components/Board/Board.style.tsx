import styled from 'styled-components';

export const Wrapper = styled.div<{ $logoColor: string }>`
  flex: 1;
  display: flex;
  --logo-color: ${(props) => props.$logoColor};
`;

export const WrapperLoading = styled(Wrapper)`
  --grid: rgba(30, 0, 0, 0.05);
  background-image: linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 25px 25px;
`;
