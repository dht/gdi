export type IWritePostState = {
  context: string;
  instructions0: string;
  body: string;
  isRunningMain?: boolean;
  instructionsId1: string;
  instructions1: string;
  output1: string;
  isRunning1?: boolean;
  instructionsId2: string;
  instructions2: string;
  output2: string;
  isRunning2?: boolean;
  instructionsId3: string;
  instructions3: string;
  output3: string;
  isRunning3?: boolean;
  focusIndex: number;
  postPlatform: string;
  postAudience: string;
  postTone: string;
};

export type IWritePostCallbacks = {
  onRunMain: () => void;
  onRunSingle: (index: number) => void;
  onRunAll: () => void;
  onClear: () => void;
  onAdopt: (index: number) => void;
};

export type IWritePostProviderProps = {
  itemId: string;
  children: React.ReactNode;
  callbacks: any;
};

export type IWritePostContext = {
  itemId: string;
  state: IWritePostState;
  callbacks: IWritePostCallbacks;
  patchState: (state: Partial<IWritePostState>) => void;
};
