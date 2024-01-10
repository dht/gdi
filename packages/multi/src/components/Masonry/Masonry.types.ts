import { IContext, IContextCallbacks, IContextProviderProps, IImage, IItem } from '../../types';
import { ItemType } from '../Items';

export type IMasonryConfig = {
  columns?: number;
  gutter?: number;
  fixedRatio?: number;
  itemType?: ItemType;
};

export type IMasonryState = {
  sortDirection: string;
  config: IMasonryConfig;
};

export type IMasonryCallbacks = IContextCallbacks & {
  onSort: () => void;
  onClick?: (id: string, item: IItem) => void;
  onDoubleClick?: (id: string, item: IItem) => void;
  onBottomReach?: () => void;
  onMouseEvent?: (ev: any) => void;
};

export type IMasonryContext = IContext<IMasonryState, IMasonryCallbacks>;

export type IMasonryProps = IContextProviderProps<IMasonryState, IMasonryCallbacks>;
