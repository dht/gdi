export type Txt = {
  id: string;
  layerType: 'txt';
  config: TxtConfig;
};

export type TxtConfig = {
  header: string;
  headerFont: FontConfig;
  subtext: string;
  subtextFont: FontConfig;
  smallPrint: string;
  smallPrintFont: FontConfig;
};

export type FontConfig = {
  fontFamily: string;
  fontSize: string;
};
