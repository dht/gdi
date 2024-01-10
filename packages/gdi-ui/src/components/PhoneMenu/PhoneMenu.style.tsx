import styled from 'styled-components';

export const Wrapper = styled.div`
  left: 0;
  max-height: 70vh;
  overflow: hidden;
  width: 320px;
  background-color: #232332;
  z-index: 3;
  box-shadow: inset 0 0 3px 3px rgba(0, 0, 0, 0.2);
  user-select: none;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.5);
  transition: all 0ms linear;
  background-image: url(//raw.githubusercontent.com/dht/gdi/main/clients/gdi-admin/public/Group.svg);
  z-index: 3;
  min-height: 480px;
  color: #eee;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    .items {
      opacity: 1;

      .badge {
        background-image: linear-gradient(
          180deg,
          #ff000066 0%,
          #aa2222 20%,
          #aa2222 90%,
          #ff3c0067 100%
        );
      }
    }
  }

  a {
    color: #d3d3d3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &::before {
    display: block;
    content: ' ';
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    top: 0px;
    background-image: linear-gradient(to left, #232332 0%, rgba(255, 217, 0, 0.6) 100%);
  }

  &.slim {
    width: 55px;
    transition: all 0ms linear;
    box-shadow: none;

    .AccountTag-wrapper {
      display: none;
    }

    .header {
      .cancel {
        transform: rotate(180deg);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        border-right: none;
      }
    }

    .UserMenu-wrapper {
      margin-left: 7px;
    }

    .items {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      overflow-x: hidden;

      .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 15px;
        text-decoration: none;
        cursor: pointer;
        width: auto;
        border-right: none;
        border-bottom: none;

        &:hover {
          background-color: rgba(255, 255, 255, 0.07);
        }

        .icon {
          font-size: 24px;
        }

        .title {
          display: none;
        }
      }
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  text-decoration: none;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 25%;
  cursor: pointer;
  position: relative;
  color: white-space;
  font-size: 30px;
  box-sizing: border-box;

  .icon {
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.07);

    &::before {
      display: block;
      content: ' ';
      position: absolute;
      left: 0;
      bottom: 0px;
      width: 2px;
      top: 0px;
      background-image: linear-gradient(to right, rgb(240, 90, 40) 0%, gold 100%);
    }
  }

  .icon {
    font-size: 20px;
  }

  .title {
    font-size: 13px;
    font-family: 'Encode Sans', Courier, monospace;
    font-variation-settings: 'wdth' 100, 'wght' 450;
  }

  &.selected {
    background-color: rgba(255, 255, 255, 0.03);

    .icon {
      color: gold;
    }

    .title {
      color: gold;
    }
  }
`;

export const Title = styled.div`
  margin-top: 5px;
`;

export const Items = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0;
  opacity: 0.5;
  transition: all 200ms ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  .badge {
    border: 1px solid rgba(255, 255, 255, 0);
  }
`;

export const GroupWrapper = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  float: left;
  padding: 7px;
  cursor: pointer;

  .groupItem {
    opacity: 0.5;

    &.selected {
      color: gold;
      opacity: 1;
    }
  }

  &:hover {
    .groupItem {
      opacity: 1;
    }

    .groupItems {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const GroupItem = styled.div`
  margin: 5px;
  float: left;

  .icon {
    font-size: 16px;
  }
`;

export const GroupItems = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 3px;
  height: 95px;
  margin-bottom: 5px;
`;

export const GroupTitle = styled.div`
  font-size: 13px;
  padding: 3px 0 5px;
  text-align: center;
  color: white;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  margin-top: 5px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px;

  .cancel {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 8px;
    position: absolute;
    right: -24px;
    background-color: rgba(60, 60, 60, 0.3);
    padding: 5px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-left: none;
    font-size: 12px;
    z-index: 3;
    top: 50px;
    margin-top: -40px;
    border-radius: 0 2px 2px 0;

    &:hover {
      color: gold;
      background-color: rgba(70, 70, 70, 0.5);
    }
  }
`;

export const Content = styled.div`
  height: calc(100% - 43px);
`;

export const WrapperBadge = styled.div`
  color: white;
  border-radius: 5px;
  position: absolute;
  background-color: #112;
  top: 5px;
  right: 5px;
  padding: 1px 4px;
  font-family: 'Encode Sans', Courier, monospace;
  font-variation-settings: 'wdth' 100, 'wght' 450;
  font-size: 10px;
  min-width: 20px;
  text-align: center;
`;
