export type Json = Record<string, any>;

export type IHudConfig = {
  color: string;
  width: number;
  height: number;
  meshId: string;
  initialPosition: ICameraPosition;
};

export type IHudItem = {
  id: string;
  text: string;
  tsStart: number;
  tsEnd: number;
  origin: number[];
  textTop: number;
  isLeft?: boolean;
  cameraValues: ICameraPosition;
};

export type IHudState = {
  color: string;
  width: number;
  height: number;
  mx: number;
  my: number;
};

export type IVisibilityState = {
  isVisible?: boolean;
  isFadingOut?: boolean;
};

export type IHudItemWithPoints = IHudItem & {
  points: IHudPoints;
} & IVisibilityState;

export type ClockAngle = '2' | '4' | '8' | '10';

export type IHudPoints = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  top: number;
  left: number;
  width: number;
  height: number;
  clockAngle: ClockAngle;
  isTextOnBottom: boolean;
};

export type Visibility = 'APPEAR' | 'DISAPPEAR';

export type ICameraPosition = {
  radius?: number;
  alpha?: number;
  beta?: number;
  target?: number[];
};

export type IHud = {
  id: string;
  layerType: 'hud';
  config: IHudConfig;
  items: IHudItem[];
};
