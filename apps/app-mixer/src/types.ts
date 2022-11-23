export type SourceDestination = 'template' | 'json' | 'site' | 'library';

export type Entity =
    | 'pages'
    | 'pageInstances'
    | 'instances'
    | 'instancesProps'
    | 'widgets'
    | 'images';

export type IMixerRequest = {
    source: SourceDestination;
    destination: SourceDestination;
    entityType?: Entity;
    itemId?: string;
    data?: Json;
    clearDestination?: boolean;
};

export type InstructionType = 'create' | 'update' | 'delete';

export type IMixerInstruction = {
    id: string;
    type: InstructionType;
    nodeName: string;
    entityType: Entity;
    data: Json;
};

export type IMixerInstructions = IMixerInstruction[];
