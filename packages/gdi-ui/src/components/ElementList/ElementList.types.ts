export type ListAction = {
  id: string;
  iconName: string;
  showIf?: (state: Json) => boolean;
};

export type ListColumn = {
  id: string;
  type: 'icon' | 'single' | 'double';
  mapFields?: Json;
  flex?: number;
};
