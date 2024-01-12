import styled from 'styled-components';

export const Wrapper = styled.div<{ $root: string }>`
  flex: 1;
  background-size: 200% 200%;
  position: absolute;
  width: 80px;
  height: 60px;
  transform: translate(-50%, -50%);
  background-image: url(${(props) => props.$root}/B-006/assets/mouth-mbp.png);
  background-size: 100% 100%;
  box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.04);

  @media (max-width: 800px) {
    width: 40px;
    height: 30px;
  }

  .mouth-background {
    fill: red;
  }

  &.set-1 {
    &.a {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-1/mouth-a.png);
    }

    &.fv {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-1/mouth-fv.png);
    }

    &.ln {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-1/mouth-ln.png);
    }

    &.mbp {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-1/mouth-mbp.png);
    }

    &.o {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-1/mouth-o.png);
    }

    &.ts {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-1/mouth-ts.png);
    }

    &.uq {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-1/mouth-uq.png);
    }

    &.wr {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-1/mouth-wr.png);
    }
  }

  &.set-2 {
    &.neutral {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-neutral.svg);
    }

    &.aei {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-aei.svg);
    }

    &.mbp {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-bmp.svg);
    }

    &.cdnstxyz {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-cdnstxyz.svg);
    }

    &.chjsh {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-chjsh.svg);
    }

    &.ee {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-ee.svg);
    }

    &.fv {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-fv.svg);
    }

    &.gk {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-gk.svg);
    }

    &.l {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-l.svg);
    }

    &.o {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-o.svg);
      margin-top: 5px;
    }

    &.qw {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-qw.svg);
    }

    &.th {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-th.svg);
    }

    &.u {
      background-image: url(${(props) => props.$root}/B-006/assets/mouth-set-2/mouth-u.svg);
    }
  }
`;
